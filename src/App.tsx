import React from 'react';
import { NavHeader } from './components/nav-header';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { EducationSection } from './components/education-section';
import { TechStackSection } from './components/tech-stack-section';
import { ProjectsSection } from './components/projects-section';
import { AchievementsSection } from './components/achievement-section';
import { ContactSection } from './components/contact-section';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;