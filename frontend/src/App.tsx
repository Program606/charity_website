import {Navbar} from "@/components/Nav/Navbar";
import {HeroSection} from "@/components/HeroPage";
import { CenterText } from "./components/CenterText";
// import {Button} from "@/components/ui/button";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import { TrioCard } from "@/components/Work/TrioCard";
import { Footer } from "@/components/Footer/Footer";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CenterText />
      <ProjectImage />
      <TrioCard />
      <Footer />

    </>
  );
}

export default App;
