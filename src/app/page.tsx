import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RecommendedGames from "@/components/RecommendedGames";
import FeaturesAndCategories from "@/components/FeaturesAndCategories";
import BeginnersGuide from "@/components/BeginnersGuide";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Query recommended games from database
  const games = await prisma.recommendedGame.findMany({
    orderBy: { createdAt: 'asc' }
  }).catch((err) => {
    console.error("Failed to fetch recommended games from database:", err);
    return []; // Return empty list as safe fallback
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendedGames initialGames={games} />
      <FeaturesAndCategories />
      <BeginnersGuide />
      <ContactSection />
      <Footer />
    </>
  );
}
