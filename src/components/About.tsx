import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code2, BrainCircuit, Rocket, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-4 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-electric font-bold">{t.about.subtitle}</span>
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
              {t.about.title1} <br /> <span className="text-outline italic font-serif">{t.about.title2}</span>
            </h2>
          </div>

          <div className="space-y-8 text-sm md:text-base leading-relaxed opacity-80 font-light">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <Stat label={t.about.stats.academic} value="UNIFEI AI" icon={<GraduationCap size={16} />} />
            <Stat label={t.about.stats.technical} value="IFSULDEMINAS" icon={<Code2 size={16} />} />
            <Stat label={t.about.stats.focus} value="AI & Full-Stack" icon={<BrainCircuit size={16} />} />
            <Stat label={t.about.stats.vision} value="AGI & Games" icon={<Rocket size={16} />} />
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ rotate: -5 }}
            whileInView={{ rotate: 5 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="aspect-[3/4] glass rounded-3xl overflow-hidden relative z-10"
          >
            <img 
              src="/IMG_20260316_001546.jpg" 
              alt="Nícollas Saldanha" 
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-electric/10 blur-[100px] -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-electric/10 blur-[100px] -z-10" />
          
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl z-20 max-w-[200px] space-y-2">
            <Target size={24} className="text-electric mb-2" />
            <p className="text-[10px] uppercase tracking-widest font-bold">{t.about.mission.label}</p>
            <p className="text-xs opacity-60 italic font-serif">{t.about.mission.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-electric/60">
      {icon} {label}
    </div>
    <div className="text-sm font-display uppercase tracking-tight">{value}</div>
  </div>
);
