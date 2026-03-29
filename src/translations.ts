export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    hero: {
      role: "Engenheiro de IA • Desenvolvedor Full-Stack • Produtor Musical",
    },
    about: {
      subtitle: "A Jornada / Nícollas Saldanha",
      title1: "O",
      title2: "Visionário",
      p1: "Nascido em 2007 e criado em Paraguaçu (MG), minha trajetória é marcada pela curiosidade insaciável e pela busca por autonomia técnica. Formado como Técnico em Informática pelo IFSULDEMINAS - Campus Machado, desenvolvi uma base sólida em Java, SQL e C++.",
      p2: "Em 2026, ingressei na primeira turma de Bacharelado em Inteligência Artificial da UNIFEI, onde exploro as fronteiras da computação moderna e o futuro da interação humana com máquinas.",
      p3: "Como autodidata em Python e JavaScript, foco em criar produtos que unem lógica robusta com experiências de usuário memoráveis. Atualmente, divido meu tempo entre o desenvolvimento de jogos indie (RE:MEMBER) e a pesquisa em AGIs locais (Protocolo Nickie).",
      stats: {
        academic: "Acadêmico",
        technical: "Técnico",
        focus: "Foco",
        vision: "Visão"
      },
      mission: {
        label: "Missão Atual",
        text: "\"Ser bem lembrado pelos que amo, através do que crio.\""
      }
    },
    projects: {
      subtitle: "Trabalhos Selecionados",
      title1: "Trabalhos",
      title2: "Selecionados",
      description: "Engenharia de software focada em performance, estética e conversão.",
      label: "Projeto",
      engineering: "A Engenharia",
      demo: "Demo ao Vivo",
      comingSoon: "Em Breve",
      items: [
        {
          title: "RS Serviços",
          subtitle: "Experiência Cinematográfica & Captação de Leads",
          description: "Elevando o padrão visual de serviços locais ao nível das grandes empresas de tecnologia.",
          impact: "Uma interface que une a fluidez de um aplicativo mobile com a estética premium do Glassmorphism, gerando uma percepção de valor imediata.",
          engineering: "Desenvolvi uma Landing Page Premium focada em conversão direta para o WhatsApp, com Cinematic Scroll e Cursor Magnético customizado."
        },
        {
          title: "Cronos",
          subtitle: "Web App Interativo e Gamificado",
          description: "Um jogo de dedução histórica diário inspirado em mecânicas de Wordle.",
          impact: "Uma interface que une a fluidez de um aplicativo mobile com a estética premium do Glassmorphism, gerando uma percepção de valor imediata.",
          engineering: "State Management complexo via session_state e processamento de dados robusto com Pandas para Leaderboards competitivos."
        },
        {
          title: "Nickie AGI",
          subtitle: "Protocolo de Inteligência Artificial Local",
          description: "Pesquisa e desenvolvimento de agentes autônomos rodando localmente com foco em privacidade. Projeto atualmente em fase de planejamento.",
          impact: "Explora o futuro da computação pessoal, onde cada indivíduo possui sua própria inteligência privada e soberana.",
          engineering: "Implementação de RAG (Retrieval-Augmented Generation) otimizado para hardware doméstico e orquestração de agentes."
        }
      ]
    },
    music: {
      subtitle: "O Artista / Lembrado",
      title1: "Legado",
      title2: "Sonoro",
      quote: "\"Quem não é visto, não é lembrado.\"",
      p1: "Produtor musical e rapper desde 2021, meu som é uma exploração da saúde mental e da consciência social. Sob o nome Lembrado, crio paisagens sonoras que vão do Phonk ao Rock, sempre com foco em temas que importam.",
      p2: "Meu objetivo de vida é ser bem lembrado pelos que amo, e a música é o canal onde transformo sentimentos em frequências. Novo álbum planejado para 11/05/2026.",
      cta: "Ouvir no Spotify",
      streaming: "Tocando Agora"
    },
    footer: {
      copy: "© 2026 • Feito à mão com Código & Paixão",
      time: "Horário Local"
    },
    common: {
      explore: "Explorar"
    },
    assistant: {
      welcome: "Olá! Sou o assistente digital do Nícollas. Como posso te ajudar hoje?",
      placeholder: "Pergunte algo sobre o Nícollas...",
      error: "Desculpe, tive um pequeno problema técnico. Pode tentar novamente?",
      system: "Você é o assistente digital de Nícollas Saldanha, um Engenheiro de IA, Desenvolvedor Full-Stack e Produtor Musical. Responda de forma profissional, criativa e amigável. Nícollas nasceu em 2007, mora em Paraguaçu (MG), estuda IA na UNIFEI e é técnico pelo IFSULDEMINAS. Ele trabalha em projetos como o jogo RE:MEMBER e o Protocolo Nickie (AGI local). Se perguntarem sobre música, ele produz sob o nome 'Lembrado'. Mantenha as respostas concisas e em português (a menos que falem em outro idioma)."
    }
  },
  en: {
    hero: {
      role: "AI Engineer • Full-Stack Developer • Music Producer",
    },
    about: {
      subtitle: "The Journey / Nícollas Saldanha",
      title1: "The",
      title2: "Visionary",
      p1: "Born in 2007 and raised in Paraguaçu (MG), my trajectory is marked by insatiable curiosity and the search for technical autonomy. Graduated as an IT Technician from IFSULDEMINAS - Campus Machado, I developed a solid foundation in Java, SQL, and C++.",
      p2: "In 2026, I joined the first class of the Bachelor's degree in Artificial Intelligence at UNIFEI, where I explore the frontiers of modern computing and the future of human interaction with machines.",
      p3: "As a self-taught Python and JavaScript developer, I focus on creating products that unite robust logic with memorable user experiences. Currently, I divide my time between indie game development (RE:MEMBER) and research in local AGIs (Nickie Protocol).",
      stats: {
        academic: "Academic",
        technical: "Technical",
        focus: "Focus",
        vision: "Vision"
      },
      mission: {
        label: "Current Mission",
        text: "\"To be well remembered by those I love, through what I create.\""
      }
    },
    projects: {
      subtitle: "Selected Works",
      title1: "Selected",
      title2: "Works",
      description: "Software engineering focused on performance, aesthetics, and conversion.",
      label: "Project",
      engineering: "The Engineering",
      demo: "Live Demo",
      comingSoon: "Coming Soon",
      items: [
        {
          title: "RS Serviços",
          subtitle: "Cinematic Experience & Lead Generation",
          description: "Elevating the visual standard of local services to the level of big tech companies.",
          impact: "An interface that unites the fluidity of a mobile app with the premium aesthetic of Glassmorphism, generating immediate value perception.",
          engineering: "Developed a Premium Landing Page focused on direct conversion to WhatsApp, with Cinematic Scroll and customized Magnetic Cursor."
        },
        {
          title: "Cronos",
          subtitle: "Interactive and Gamified Web App",
          description: "A daily historical deduction game inspired by Wordle mechanics.",
          impact: "Demonstrates the ability to build a product from end to end: from data engineering to the final user experience.",
          engineering: "Complex State Management via session_state and robust data processing with Pandas for competitive Leaderboards."
        },
        {
          title: "Nickie AGI",
          subtitle: "Local Artificial Intelligence Protocol",
          description: "Research and development of autonomous agents running locally with a focus on privacy. Project currently in the planning phase.",
          impact: "Explores the future of personal computing, where each individual has their own private and sovereign intelligence.",
          engineering: "Implementation of optimized RAG (Retrieval-Augmented Generation) for home hardware and agent orchestration."
        }
      ]
    },
    music: {
      subtitle: "The Artist / Lembrado",
      title1: "Sound",
      title2: "Legacy",
      quote: "\"He who is not seen, is not remembered.\"",
      p1: "Music producer and rapper since 2021, my sound is an exploration of mental health and social consciousness. Under the name Lembrado, I create soundscapes ranging from Phonk to Rock, always focusing on themes that matter.",
      p2: "My life goal is to be well remembered by those I love, and music is the channel where I transform feelings into frequencies. New album planned for 05/11/2026.",
      cta: "Listen on Spotify",
      streaming: "Now Streaming"
    },
    footer: {
      copy: "© 2026 • Handcrafted with Code & Passion",
      time: "Local Time"
    },
    common: {
      explore: "Explore"
    },
    assistant: {
      welcome: "Hello! I am Nícollas's digital assistant. How can I help you today?",
      placeholder: "Ask something about Nícollas...",
      error: "Sorry, I had a small technical problem. Can you try again?",
      system: "You are the digital assistant of Nícollas Saldanha, an AI Engineer, Full-Stack Developer, and Music Producer. Respond professionally, creatively, and friendly. Nícollas was born in 2007, lives in Paraguaçu (MG), studies AI at UNIFEI, and is a technician at IFSULDEMINAS. He works on projects like the game RE:MEMBER and the Nickie Protocol (local AGI). If asked about music, he produces under the name 'Lembrado'. Keep answers concise and in English (unless they speak in another language)."
    }
  }
};
