import React from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Music } from './components/Music';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { motion, useScroll, useSpring } from 'motion/react';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { language, setLanguage } = useLanguage();

  return (
    <main className="relative selection:bg-electric selection:text-white">
      <CustomCursor />
      <NeuralBackground />
      <AIAssistant />
      
      {/* Language Toggle */}
      <div className="fixed top-8 right-8 z-[100] flex gap-2">
        <button 
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full transition-all ${language === 'pt' ? 'bg-electric text-white' : 'glass opacity-60 hover:opacity-100'}`}
        >
          PT
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-full transition-all ${language === 'en' ? 'bg-electric text-white' : 'glass opacity-60 hover:opacity-100'}`}
        >
          EN
        </button>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric origin-left z-[100]"
        style={{ scaleX }}
      />

      <Hero />
      
      <div className="space-y-32">
        <Projects />
        <About />
        <Music />
      </div>

      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
