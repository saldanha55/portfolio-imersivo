import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Cpu, Share2, Copy, Twitter, Linkedin, X, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../LanguageContext';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  impact: string;
  engineering: string;
  isComingSoon?: boolean;
}

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      ...t.projects.items[0],
      tech: ["Vanilla JS", "HTML5", "CSS3", "Canvas API"],
      link: "https://rsservicos.netlify.app",
      image: "/fundo.jpg",
    },
    {
      ...t.projects.items[1],
      tech: ["Python", "Streamlit", "Pandas", "CSS Custom"],
      link: "https://cronosenigma.streamlit.app",
      github: "https://github.com/saldanha55/cronos",
      image: "/Gemini_Generated_Image_sdkwgsdkwgsdkwgs.png",
    },
    {
      ...t.projects.items[2],
      tech: ["Python", "PyTorch", "LlamaIndex", "Ollama"],
      image: "/IMG_20260316_001546.jpg",
      isComingSoon: true
    }
  ];

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
          {t.projects.title1} <br /> <span className="text-outline">{t.projects.title2}</span>
        </h2>
        <p className="max-w-xs text-xs uppercase tracking-[0.3em] opacity-40 leading-relaxed text-right">
          {t.projects.description}
        </p>
      </div>

      <div className="grid gap-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const handleCopy = () => {
    const url = project.link || window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const url = project.link || window.location.href;
    const text = `Check out ${project.title} by Nícollas Saldanha!`;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareLinkedIn = () => {
    const url = project.link || window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className={cn(
        "flex flex-col gap-12 items-center min-h-[60vh] justify-center",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="flex-1 relative group w-full">
        <motion.div 
          style={{ y }}
          className="relative aspect-video overflow-hidden rounded-2xl glass flex items-center justify-center shadow-2xl"
        >
          {project.isComingSoon ? (
            <div className="absolute inset-0 flex items-center justify-center bg-ink/80 backdrop-blur-md z-10">
              <span className="text-2xl font-display uppercase tracking-[0.5em] text-electric animate-pulse text-center px-4">
                {t.projects.comingSoon}
              </span>
            </div>
          ) : null}
          {!project.isComingSoon && (
            <img 
              src={project.image} 
              alt={project.title} 
              className={cn(
                "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-60",
                "group-hover:grayscale-0 group-hover:opacity-100"
              )}
              referrerPolicy="no-referrer"
            />
          )}
          {project.isComingSoon && (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <Cpu size={48} className="text-white/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        </motion.div>
        
        {/* Floating Tech Badges */}
        <div className="absolute -bottom-4 -right-4 flex flex-wrap gap-2 max-w-[240px] justify-end z-20">
          {project.tech.map(techName => (
            <motion.span 
              key={techName} 
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
              }}
              className="px-3 py-1 text-[10px] uppercase tracking-widest glass rounded-full text-electric cursor-default transition-colors"
            >
              {techName}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div style={{ y: textY }} className="flex-1 space-y-8">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-electric font-bold">0{index + 1} / {t.projects.label}</span>
          <h3 className="text-4xl md:text-6xl font-display uppercase tracking-tighter">{project.title}</h3>
          <p className="text-sm italic font-serif opacity-60">{project.subtitle}</p>
        </div>

        <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-80 font-light">
          <p>{project.description}</p>
          <div className="pl-4 border-l-2 border-electric/30 space-y-4">
            <p className="text-xs uppercase tracking-widest text-electric/80 font-bold flex items-center gap-2">
              <Cpu size={14} /> {t.projects.engineering}
            </p>
            <p className="text-sm">{project.engineering}</p>
          </div>
        </div>

        <div className="flex gap-4 pt-4 items-center">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-full text-xs uppercase tracking-widest hover:bg-electric hover:text-white transition-all group"
            >
              {t.projects.demo} <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all"
            >
              <Github size={18} />
            </a>
          )}
          
          <div className="relative">
            <button 
              onClick={() => setIsShareOpen(!isShareOpen)}
              className={cn(
                "p-3 glass rounded-full transition-all",
                isShareOpen ? "bg-electric text-white" : "hover:bg-white/10"
              )}
            >
              <Share2 size={18} />
            </button>

            <AnimatePresence>
              {isShareOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 mb-4 glass p-4 rounded-2xl min-w-[200px] z-50 shadow-2xl border border-white/10"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest opacity-60">Share Project</span>
                    <button onClick={() => setIsShareOpen(false)} className="opacity-40 hover:opacity-100">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="grid gap-2">
                    <button 
                      onClick={handleCopy}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors text-xs uppercase tracking-widest"
                    >
                      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      {copied ? "Copied!" : "Copy Link"}
                    </button>
                    <button 
                      onClick={shareTwitter}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors text-xs uppercase tracking-widest"
                    >
                      <Twitter size={14} />
                      Twitter
                    </button>
                    <button 
                      onClick={shareLinkedIn}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/5 transition-colors text-xs uppercase tracking-widest"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
