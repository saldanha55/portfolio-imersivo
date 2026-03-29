import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, Headphones, Pause } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Music: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="music" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)', rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="order-2 md:order-1 relative"
        >
          <div className="aspect-square glass rounded-full flex items-center justify-center relative overflow-hidden group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[40px] border-white/5 rounded-full"
            />
            <motion.div 
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className={`w-3/4 h-3/4 rounded-full overflow-hidden relative z-10 transition-all duration-700 ${isPlaying ? 'grayscale-0 scale-105 shadow-[0_0_50px_rgba(0,255,255,0.3)]' : 'grayscale group-hover:grayscale-0'}`}
            >
              <img 
                src="/1763493324336.png" 
                alt="Lembrado" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Vinyl Center Hole */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-ink rounded-full border-2 border-white/10 shadow-inner" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
            >
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-electric rounded-full flex items-center justify-center text-white shadow-2xl shadow-electric/50"
              >
                {isPlaying ? <Pause fill="white" size={32} /> : <Play fill="white" size={32} />}
              </button>
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div 
                key="status"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                className="absolute -top-4 -left-4 glass p-4 rounded-2xl flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center">
                  <Headphones size={20} className="text-electric" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{t.music.streaming}</p>
                  <p className="text-xs font-bold">Lembrado</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="player"
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                className="absolute -top-10 -left-10 md:-left-20 z-30 w-[300px] shadow-2xl"
              >
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/artist/4jQriM28sa0FuCduWRpvm1?utm_source=generator&theme=0" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen={false} 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="order-1 md:order-2 space-y-12"
        >
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
        </motion.div>
      </div>
    </section>
  );
};
