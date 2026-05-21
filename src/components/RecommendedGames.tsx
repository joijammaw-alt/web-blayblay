"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getBasePath } from "@/utils/basePath";

const games = [
  {
    id: "dixit",
    title: "Dixit",
    img: getBasePath(
      "/images/690953298_1332313532099290_2726634727127638217_n.jpg",
    ),
    tags: [
      { t: "เล่าเรื่อง", c: "#FF9900" },
      { t: "จินตนาการ", c: "#808080" },
      { t: "3-6 คน", c: "#FF9900" },
    ],
    desc: "ใช้ภาพเล่าเรื่อง เปิดจินตนาการ ทายความคิดกันให้ถูกต้อง สนุก อบอุ่น และสร้างรอยยิ้มให้ทุกคนบนโต๊ะ",
    borderColor: "#FF9900",
  },
  {
    id: "codenames",
    title: "Codenames",
    img: getBasePath(
      "/images/693435817_2038086813725139_1562932010930628367_n.jpg",
    ),
    tags: [
      { t: "ปาร์ตี้", c: "#C0392B" },
      { t: "คำศัพท์", c: "#8E44AD" },
      { t: "4+ คน", c: "#C0392B" },
    ],
    desc: "เกมคำศัพท์สุดมันส์ แบ่งทีมลับใบ้คำ คิดเชื่อมโยง แข่งกับเวลา ยิ่งเยอะ ยิ่งสนุก!",
    borderColor: "#C0392B",
  },
  {
    id: "carcassonne",
    title: "Carcassonne",
    img: getBasePath(
      "/images/665990488_4463411690642997_4580202065504028951_n.jpg",
    ),
    tags: [
      { t: "วางแผน", c: "#27AE60" },
      { t: "ครอบครัว", c: "#27AE60" },
      { t: "2-5 คน", c: "#27AE60" },
    ],
    desc: "สร้างเมือง วางพื้นที่ สร้างเส้นทาง วางแผนและเก็บแต้มไปด้วยกัน เหมาะกับครอบครัวและมือใหม่",
    borderColor: "#27AE60",
  },
];

export default function RecommendedGames() {
  return (
    <section
      id="recommended"
      style={{ padding: "4rem 2rem", background: "white" }}
    >
      {/* เพิ่ม CSS ท้องถิ่น เพื่อคุมแอนิเมชันยกตัวของการ์ดเกมให้เสถียร 100% */}
      <style>{`
        .game-card-hover {
          transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
        }
        .game-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12) !important;
        }
        .nav-btn-hover:hover {
          background: #F8FBFF !important;
          transform: scale(1.05);
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "1.5rem" }}>🎲</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              color: "var(--bb-blue)",
              margin: 0,
            }}
          >
            เกมแนะนำยอดฮิต
          </h2>
          <span style={{ fontSize: "1.5rem", color: "#0057B8" }}>🧩</span>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            className="nav-btn-hover"
            style={{
              position: "absolute",
              left: "-20px",
              zIndex: 10,
              background: "white",
              border: "1px solid #E8F0FE",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "all 0.2s",
            }}
          >
            <ChevronLeft size={24} color="var(--bb-blue)" />
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {games.map((game) => (
              <div
                key={game.id}
                className="game-card-hover"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  border: `1px solid ${game.borderColor}30`,
                }}
              >
                <div
                  style={{
                    height: "220px",
                    position: "relative",
                    background: "#f5f5f5",
                  }}
                >
                  <Image
                    src={game.img}
                    alt={game.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.8rem",
                      color: game.borderColor,
                      marginBottom: "0.8rem",
                    }}
                  >
                    {game.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                    }}
                  >
                    {game.tags.map((tag) => (
                      <span
                        key={tag.t}
                        style={{
                          background: `${tag.c}20`,
                          color: tag.c,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {tag.t}
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--bb-text-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      minHeight: "60px",
                    }}
                  >
                    {game.desc}
                  </p>

                  <button
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: `1.5px solid ${game.borderColor}`,
                      color: game.borderColor,
                      padding: "0.6rem",
                      borderRadius: "25px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = game.borderColor;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = game.borderColor;
                    }}
                  >
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-btn-hover"
            style={{
              position: "absolute",
              right: "-20px",
              zIndex: 10,
              background: "white",
              border: "1px solid #E8F0FE",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "all 0.2s",
            }}
          >
            <ChevronRight size={24} color="var(--bb-blue)" />
          </button>
        </div>
      </div>
    </section>
  );
}
