import { Navbar } from "@/components/Nav/Navbar";
import { HeroSection } from "@/components/HeroPage";
import { About } from "@/components/About/About";
import { TeamPage } from "@/components/Team/TeamPage";
import { CenterText } from "./components/CenterText";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { TrioCard } from "@/components/Work/TrioCard";
import { Footer } from "@/components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <TeamPage />
      <TrioCard />
      <CenterText />
      <ProjectImage />
      <Footer />
    </>
  );
}

export default App;
