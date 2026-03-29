import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const Navigation: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: t.projects.title1 },
    { id: 'about', label: t.about.title1 },
    { id: 'music', label: t.music.title1 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionIds = ['hero', 'projects', 'about', 'music'];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-widest text-electric whitespace-nowrap">
            {section.label}
          </span>
          <motion.div
            animate={{
              height: activeSection === section.id ? 24 : 8,
              backgroundColor: activeSection === section.id ? '#00FFFF' : 'rgba(255, 255, 255, 0.2)'
            }}
            className="w-2 rounded-full transition-colors"
          />
        </button>
      ))}
    </div>
  );
};
