"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { getBasePath } from "@/utils/basePath";

const navLinks = [
  { label: "หน้าแรก", href: "#home" },
  { label: "เกมแนะนำ", href: "#recommended" },
  { label: "หมวดหมู่", href: "#categories" },
  { label: "มือใหม่เริ่มที่นี่", href: "#beginners" },
  { label: "ติดต่อร้าน", href: "#contact" },
  { label: "Brewlean", href: "https://blayblay.com/brewlean" },
  { label: "Playlab", href: "https://blayblay.com/playlab" },
  { label: "Blog", href: "https://blayblay.com/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // 1. เพิ่ม State เพื่อเก็บว่าเมนูไหนกำลัง Active อยู่ (เริ่มต้นที่ #home)
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    // ฟังก์ชันจัดการตอนเลื่อนหน้าจอ
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // 2. วนลูปเช็กตำแหน่งแต่ละ Section บนหน้าจอ
      for (const link of navLinks) {
        // เช็กว่าลิงก์ขึ้นต้นด้วย # ไหม ถ้าไม่ ให้ข้ามไปเลย (ไม่เอาลิงก์เต็ม URL มาคิด)
        if (!link.href.startsWith("#")) continue;

        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // ถ้าขอบบนของ Section เลื่อนขึ้นมาใกล้เคียงกับความสูงของ Navbar
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveHash(link.href);
            break;
          }
        }
      }
    };

    // ฟังก์ชันดักจับตอนกดปุ่ม Back/Forward หรือเปลี่ยน Hash บน URL
    const onHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", onHashChange);

    // เรียกใช้ครั้งแรกเพื่อเช็กสถานะเริ่มต้น
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "white",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,87,184,0.1)" : "none",
        borderBottom: "1px solid #E8F0FE",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setActiveHash("#home")}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src={getBasePath(
              "/images/695902101_1505839277847633_6383404664583632494_n.png",
            )}
            alt="BlayBlay Logo"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {navLinks.map((item) => {
            // 3. เช็กว่าลิงก์นี้ตรงกับเมนูที่กำลังแสดงอยู่หรือไม่
            const isActive = activeHash === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                // เมื่อคลิกเมนู ให้เปลี่ยนสถานะ Active และเลื่อนหน้าจอทันที
                onClick={() => setActiveHash(item.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: isActive ? 600 : 400, // ใช้ isActive แทน idx === 0
                  fontSize: "0.95rem",
                  color: isActive ? "var(--bb-blue)" : "var(--bb-text-muted)",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px 8px 0 0", // ปรับรัศมีมนให้เข้ากับเส้นใต้
                  transition: "all 0.2s",
                  borderBottom: isActive
                    ? "2px solid var(--bb-blue)"
                    : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--bb-blue)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--bb-text-muted)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div style={{ width: "100px" }}></div>
      </div>
    </header>
  );
}
