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
      <HeroSection />
      <RecommendedGames />
      <FeaturesAndCategories />
      <BeginnersGuide />
      <ContactSection />
      <Footer />
    </>
  );
}
