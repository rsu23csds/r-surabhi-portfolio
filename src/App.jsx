import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import SkillsInteractive from './components/SkillsInteractive';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceEducation from './components/ExperienceEducation';
import AchievementsCertifications from './components/AchievementsCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090c0a] text-[#f0ebe1] selection:bg-[#7e142e] selection:text-[#f8f6f0]">
      {/* 1. Creative Initial Loader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* 2. Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* 3. Subtle Film Grain Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[1] noise-overlay" />

      {/* 4. Three.js Interactive 3D Canvas Background */}
      <ThreeBackground />

      {/* 5. Navigation Bar */}
      <Navbar onContactClick={() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 6. Main Interactive Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <MarqueeStrip />
        <About />
        <SkillsInteractive />
        <ProjectsShowcase />
        <ExperienceEducation />
        <AchievementsCertifications />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Digital Resume / Dossier Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
