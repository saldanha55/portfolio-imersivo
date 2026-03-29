import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Music, ArrowDown, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(30)].map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const radius = 50 + Math.random() * 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: '50vw', y: '50vh' }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, Math.random() * 2 + 0.5, 0],
              x: `calc(50vw + ${x}vw)`,
              y: `calc(50vh + ${y}vh)`,
            }}
            transition={{ 
              duration: Math.random() * 2 + 1.5, 
              delay: 0.6, // Sync with the "SALDANHA" slam
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-electric rounded-full shadow-[0_0_15px_rgba(0,255,255,1)]"
          />
        );
      })}
    </div>
  );
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <Particles />

      {/* Background Aura Shockwave */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
        animate={{ opacity: [0, 0.8, 0], scaleY: [0, 0.05, 1], scaleX: [0, 2, 1] }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-electric/20 rounded-full blur-[80px] -z-10 pointer-events-none"
      />
      
      {/* Persistent Breathing Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.3, 0.15], scale: [0.8, 1.2, 1] }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-electric/30 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="text-center z-10 relative">
        <div className="flex flex-col items-center">
          <motion.h1 
            animate={{ 
              y: [-5, 5, -5],
              rotateX: [0, 5, 0, -5, 0],
              rotateY: [0, -5, 0, 5, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-6xl md:text-9xl font-display flex flex-col leading-none relative perspective-1000"
          >
            
            {/* "nícollas" - dynamic slide and un-skew */}
            <motion.span 
              initial={{ opacity: 0, x: -200, skewX: 30, filter: 'blur(20px)' }}
              animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.2, type: "spring", damping: 12, stiffness: 100 }}
              className="text-outline tracking-widest origin-left inline-block"
            >
              nícollas
            </motion.span>
            
            {/* "SALDANHA" - massive slam with flash */}
            <motion.span 
              initial={{ opacity: 0, scale: 4, filter: 'blur(40px) brightness(300%)', y: -100 }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(100%)', y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5, damping: 15 }}
              className="text-electric font-serif italic font-bold -mt-4 md:-mt-8 uppercase tracking-tighter mix-blend-difference relative z-10 inline-block"
            >
              SALDANHA
              
              {/* Explosive inner aura for SALDANHA */}
              <motion.span
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 1, 0], scale: [1, 1.3, 1.8], filter: ['blur(5px)', 'blur(20px)', 'blur(40px)'] }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                className="absolute inset-0 text-electric -z-10 select-none pointer-events-none"
              >
                SALDANHA
              </motion.span>

              {/* Continuous pulse */}
              <motion.span
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: [0, 0.5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 text-electric blur-[15px] -z-10 select-none pointer-events-none"
              >
                SALDANHA
              </motion.span>
            </motion.span>

            {/* "reis" - dynamic slide and un-skew from right */}
            <motion.span 
              initial={{ opacity: 0, x: 200, skewX: -30, filter: 'blur(20px)' }}
              animate={{ opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.8, type: "spring", damping: 12, stiffness: 100 }}
              className="text-outline tracking-widest self-end origin-right inline-block"
            >
              reis
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 0.7, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.4, duration: 1, type: "spring", damping: 15 }}
          className="mt-8 text-sm md:text-base font-sans tracking-[0.3em] uppercase max-w-2xl mx-auto"
        >
          {t.hero.role}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mt-12 flex gap-6 justify-center"
        >
          <SocialLink href="https://github.com/saldanha55" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://open.spotify.com/intl-pt/artist/4jQriM28sa0FuCduWRpvm1" icon={<Music size={20} />} label="Spotify" />
          <SocialLink href="https://www.instagram.com/nicsaldanha/" icon={<Instagram size={20} />} label="Instagram" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] opacity-40">{t.common.explore}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, color: '#4F46E5' }}
    className="flex items-center gap-2 text-paper/60 transition-colors"
  >
    {icon}
    <span className="text-xs uppercase tracking-widest hidden md:inline">{label}</span>
  </motion.a>
);
