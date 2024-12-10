import About from "./components/sections/About";
import Counter from "./components/sections/Counter";
import Footer from "./components/sections/Footer";
import HeroCarousel from "./components/sections/HeroCarousel";
import SaveYourDate from "./components/sections/SaveYourDate";
import SaveYourMemories from "./components/sections/SaveYourMemories";
// import HeroSection from "./components/sections/HeroSection";
// import ScrollingCam from "./components/sections/ScrollingCam";

export default function Home() {
  return (
<div className="bg-backgroundColor min-h-screen">
<HeroCarousel/>
<About/>
<Counter/>
<SaveYourMemories/>
<SaveYourDate/>
{/* <LetsWorkTogether/> */}
<Footer/>
</div>
  );
}
