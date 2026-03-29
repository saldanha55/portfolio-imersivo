import React from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink, Headphones } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Music: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="aspect-square glass rounded-full flex items-center justify-center relative overflow-hidden group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[40px] border-white/5 rounded-full"
            />
            <div className="w-3/4 h-3/4 rounded-full overflow-hidden relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src="/1763493324336.png" 
                alt="Lembrado" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <a 
                href="https://open.spotify.com/intl-pt/artist/4jQriM28sa0FuCduWRpvm1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-20 h-20 bg-electric rounded-full flex items-center justify-center text-white shadow-2xl shadow-electric/50"
              >
                <Play fill="white" size={32} />
              </a>
            </motion.div>
          </div>
          
          <div className="absolute -top-4 -left-4 glass p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center">
              <Headphones size={20} className="text-electric" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">{t.music.streaming}</p>
              <p className="text-xs font-bold">Lembrado</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-electric font-bold">{t.music.subtitle}</span>
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
              {t.music.title1} <br /> <span className="text-outline italic font-serif">{t.music.title2}</span>
            </h2>
          </div>

          <div className="space-y-8 text-sm md:text-base leading-relaxed opacity-80 font-light">
            <p className="italic font-serif text-xl border-l-4 border-electric/30 pl-6 py-2">
              {t.music.quote}
            </p>
            <p>{t.music.p1}</p>
            <p>{t.music.p2}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://open.spotify.com/intl-pt/artist/4jQriM28sa0FuCduWRpvm1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white text-ink rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-electric hover:text-white transition-all shadow-xl shadow-white/5"
            >
              {t.music.cta} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
