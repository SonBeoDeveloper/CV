// pages/index.js
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div id="hero" className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div id="about" className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
      </div>
      <div id="projects" className="container mt-24 mx-auto px-12 py-4">
        <ProjectSection />
      </div>
      <div id="contact" className="container mt-24 mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
