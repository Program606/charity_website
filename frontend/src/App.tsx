import {Navbar} from "@/components/Nav/Navbar";
import {HeroSection} from "@/components/HeroPage";
import { CenterText } from "./components/CenterText";
// import {Button} from "@/components/ui/button";
import { ProjectImage } from "@/components/ProjectImage/ProjectImage";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <CenterText />
      <ProjectImage />

    </>
  );
}

export default App;
