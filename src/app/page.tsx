import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RecommendedGames from "@/components/RecommendedGames";
import FeaturesAndCategories from "@/components/FeaturesAndCategories";
import BeginnersGuide from "@/components/BeginnersGuide";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* ใส่ id ครอบแต่ละส่วนไว้ */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="recommended">
        <RecommendedGames />
      </section>
      <section id="categories">
        <FeaturesAndCategories />
      </section>
      <section id="beginners">
        <BeginnersGuide />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}
