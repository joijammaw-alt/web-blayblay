"use client";
import { Clock, Users, CalendarDays, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{ padding: "0 2rem 4rem", background: "white" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            background: "#F8FBFF",
            border: "1px solid #E8F0FE",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Store Info (Dark Blue Background) */}
          <div
            style={{
              background: "var(--bb-blue)",
              color: "white",
              padding: "3rem",
              flex: "1 1 400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.2rem",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              ร้านบอร์ดเกมกำแพงเพชร
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.1rem",
                }}
              >
                <Clock size={24} /> เปิดทุกวัน 12.00 - 21.00
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.1rem",
                }}
              >
                <Users size={24} /> มีคนสอน - พาเล่นทุกเกม
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.1rem",
                  color: "var(--bb-amber)",
                  fontWeight: 600,
                }}
              >
                <CalendarDays size={24} /> นัดเพื่อนมาหาได้เลย!
              </div>
            </div>

            {/* Store Photo Placeholder */}
            <div
              style={{
                width: "100%",
                height: "180px",
                background: "#003366",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#88a8c4",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              ภาพบรรยากาศร้าน
            </div>
          </div>

          {/* Middle: QR & Booking */}
          <div
            style={{
              padding: "3rem 2rem",
              flex: "1 1 250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid #E8F0FE",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: "var(--bb-blue)",
                marginBottom: "1.5rem",
              }}
            >
              จองโต๊ะ / สอบถาม
            </h4>

            {/* QR Placeholder */}
            <div
              style={{
                width: "150px",
                height: "150px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
              }}
            >
              📱
            </div>

            <a
              href="https://www.facebook.com/blayblayboardgame/?locale=th_TH"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#00B900",
                color: "white",
                textDecoration: "none",
                padding: "0.8rem 2.5rem",
                borderRadius: "30px",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                display: "inline-block",
                boxShadow: "0 4px 12px rgba(0,185,0,0.3)",
              }}
            >
              ทักแชทเลย
            </a>
          </div>

          {/* Right: Map */}
          <div
            style={{
              padding: "3rem 2rem",
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: "var(--bb-blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              แผนที่ร้าน
            </h4>

            {/* Map Placeholder */}
            <div
              style={{
                width: "100%",
                height: "150px",
                background: "#E8F0FE",
                borderRadius: "12px",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--bb-blue)",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <MapPin size={32} />
              <span style={{ fontWeight: 600 }}>BLAY BLAY</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                color: "var(--bb-blue)",
                fontSize: "0.9rem",
              }}
            >
              <MapPin size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>
                22/10 ถ.ชากังราว ต.ในเมือง อ.เมืองกำแพงเพชร
                <br />
                จ.กำแพงเพชร 62000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
