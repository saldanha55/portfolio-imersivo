import React from 'react';
import { motion } from 'motion/react';
import { Github, Music, ArrowDown, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-display flex flex-col leading-none">
            <span className="text-outline tracking-widest">nícollas</span>
            <span className="text-electric font-serif italic font-bold -mt-4 md:-mt-8 uppercase tracking-tighter mix-blend-difference">
              SALDANHA
            </span>
            <span className="text-outline tracking-widest self-end">reis</span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-sm md:text-base font-sans tracking-[0.3em] uppercase max-w-2xl mx-auto"
        >
          {t.hero.role}
        </motion.p>

        <div className="mt-12 flex gap-6 justify-center">
          <SocialLink href="https://github.com/saldanha55" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://open.spotify.com/intl-pt/artist/4jQriM28sa0FuCduWRpvm1" icon={<Music size={20} />} label="Spotify" />
          <SocialLink href="https://www.instagram.com/nicsaldanha/" icon={<Instagram size={20} />} label="Instagram" />
        </div>
      </motion.div>

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
