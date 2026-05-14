import Navbar from "@/components/Navbar";
import BrewLeanSection from "@/components/BrewLeanSection";
import BoardGameSection from "@/components/BoardGameSection";
import PlayLabSection from "@/components/PlayLabSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <BrewLeanSection />
      <BoardGameSection />
      <PlayLabSection />
      <CommunitySection />
      <Footer />
    </>
  );
}
