import React from 'react';
import { motion } from 'motion/react';
import { Github, Music, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-24 px-4 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12"
      >
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-display uppercase tracking-tighter">
            Nícollas <span className="text-outline">Saldanha</span>
          </h3>
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40">
            {t.footer.copy}
          </p>
        </div>

        <div className="flex gap-8">
          <FooterLink href="https://github.com/saldanha55" icon={<Github size={18} />} />
          <FooterLink href="https://open.spotify.com/intl-pt/artist/4jQriM28sa0FuCduWRpvm1" icon={<Music size={18} />} />
          <FooterLink href="https://www.instagram.com/nicsaldanha/" icon={<Instagram size={18} />} />
          <FooterLink href="mailto:lembrado11@gmail.com" icon={<Mail size={18} />} />
        </div>

        <div className="text-right hidden md:block">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-2">{t.footer.time}</p>
          <p className="text-sm font-display">{new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} • Pouso Alegre, BR</p>
        </div>
      </motion.div>
    </footer>
  );
};

const FooterLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 glass rounded-full hover:bg-electric hover:text-white transition-all text-paper/60"
  >
    {icon}
  </a>
);
