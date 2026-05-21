FROM node:20.19-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Prisma ต้องการ openssl ในการทำงานบน Alpine Linux จึงต้องเพิ่มเข้าไปด้วย
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# [จุดที่ 1 แก้ไข] สั่งสร้าง Prisma Client ก่อนที่จะ Build Next.js
RUN npx prisma generate

# Next.js telemetry is disabled
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# [จุดที่ 2 แก้ไข] ฝั่ง Production รันก็ต้องใช้ openssl สำหรับ Prisma Engine เหมือนกัน
RUN apk add --no-cache openssl

ENV NODE_ENV production
# Next.js telemetry is disabled
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# [จุดที่ 3 แก้ไข] ย้ายคำสั่ง Copy prisma ขึ้นมาไว้ก่อนที่จะสลับสิทธิ์ผู้ใช้ และให้สิทธิ์ nextjs ไปเลย
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# สลับไปใช้สิทธิ์ User ธรรมดา (เพื่อความปลอดภัย)
USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# Run the standalone server
CMD ["node", "server.js"]