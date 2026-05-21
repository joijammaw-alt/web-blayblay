import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean existing recommended games first to avoid duplicates on re-runs
  await prisma.recommendedGame.deleteMany();

  const games = [
    {
      title: 'Dixit',
      img: '/img/690953298_1332313532099290_2726634727127638217_n.jpg',
      tags: ['เล่าเรื่อง', 'จินตนาการ', '3-6 คน'],
      desc: 'ใช้ภาพเล่าเรื่อง เปิดจินตนาการ ทายความคิดกันให้ถูกต้อง สนุก อบอุ่น และสร้างรอยยิ้มให้ทุกคนบนโต๊ะ',
    },
    {
      title: 'Codenames',
      img: '/img/693435817_2038086813725139_1562932010930628367_n.jpg',
      tags: ['ปาร์ตี้', 'คำศัพท์', '4+ คน'],
      desc: 'เกมคำศัพท์สุดมันส์ แบ่งทีมลับใบ้คำ คิดเชื่อมโยง แข่งกับเวลา ยิ่งเยอะ ยิ่งสนุก!',
    },
    {
      title: 'Carcassonne',
      img: '/img/665990488_4463411690642997_4580202065504028951_n.jpg',
      tags: ['วางแผน', 'ครอบครัว', '2-5 คน'],
      desc: 'สร้างเมือง วางพื้นที่ สร้างเส้นทาง วางแผนและเก็บแต้มไปด้วยกัน เหมาะกับครอบครัวและมือใหม่',
    },
  ];

  for (const game of games) {
    const created = await prisma.recommendedGame.create({
      data: game,
    });
    console.log(`✅ Created recommended game: ${created.title}`);
  }

  console.log('🏁 Seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
