import { getWhatsAppUrl } from "@/lib/site-config";

export type NavItem = {
  label: string;
  href: string;
};

export type VideoItem = {
  title: string;
  description: string;
  category: string;
  youtubeId?: string;
  vimeoId?: string;
  thumbnailUrl?: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
};

export type NewsItem = {
  title: string;
  dateLabel: string;
  location: string;
  description: string;
  category: string;
};

export const navigation: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "História", href: "/historia" },
  { label: "Como Jogar / Regras", href: "/como-jogar" },
  { label: "Galeria", href: "/galeria" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
];

export const quickCards = [
  {
    title: "História",
    description: "Conheça a origem da modalidade, os seus marcos e o crescimento em Angola.",
    href: "/historia",
  },
  {
    title: "Como se joga",
    description: "Entenda o campo, a bola, os fundamentos, a pontuação e a dinâmica do jogo.",
    href: "/como-jogar",
  },
  {
    title: "Formação de treinadores",
    description: "Veja o curso Nível I e prepare-se para atuar com certificação.",
    href: "/formacao",
  },
  {
    title: "Vídeos",
    description: "Aceda a apresentações, treinos, entrevistas e conteúdos audiovisuais da modalidade.",
    href: "/videos",
  },
];

// homeMetrics removido conforme solicitado

export const audiences = [
  "Atletas que procuram uma nova experiência colectiva",
  "Escolas que querem ampliar a oferta de práticas desportivas",
  "Treinadores e professores de Educação Física",
  "Comunidades e projetos sociais com foco em inclusão ativa",
];

export const aboutBenefits = [
  {
    title: "Para atletas",
    description:
      "Estimula leitura de jogo, tomada de decisão, coordenação, resistência e espírito coletivo.",
  },
  {
    title: "Para escolas",
    description:
      "Cria uma experiência pedagógica acessível, cooperativa e alinhada com educação motora.",
  },
  {
    title: "Para comunidades",
    description:
      "Fortalece convivência, organização local e atividades desportivas de baixo custo operacional.",
  },
  {
    title: "Para treinadores",
    description:
      "Abre oportunidades de formação, certificação e liderança em projetos desportivos emergentes.",
  },
];

export const historyTimeline = [
  {
    stage: "Origem",
    title: "Nascimento do conceito em Angola",
    description:
      "O COFOBOL surge como proposta de modalidade colectiva com identidade própria, foco pedagógico e forte dimensão comunitária.",
  },
  {
    stage: "Primeiros eventos",
    title: "Demonstrações e sessões iniciais",
    description:
      "As primeiras apresentações permitem explicar as bases do jogo, validar dinâmicas e envolver novos praticantes.",
  },
  {
    stage: "Capacitação",
    title: "Formação de multiplicadores",
    description:
      "A modalidade avança quando treinadores, professores e agentes desportivos começam a receber formação estruturada.",
  },
  {
    stage: "Expansão",
    title: "Crescimento em escolas e comunidades",
    description:
      "A prática passa a ganhar espaço em ações educativas, eventos locais e iniciativas de desenvolvimento desportivo.",
  },
];

export const playSections = [
  {
    title: "O campo",
    description:
      "Área de jogo organizada para facilitar circulação, ocupação racional de espaços e leitura táctica por parte dos participantes.",
    bullets: [
      "Delimitação clara de zonas de ataque, construção e finalização.",
      "Dimensões ajustáveis conforme contexto escolar, comunitário ou competitivo.",
      "Marcação visual simples para aprendizagem rápida em ambiente formativo.",
    ],
  },
  {
    title: "A bola",
    description:
      "Elemento central do jogo, pensado para estimular controlo, receção, passe e precisão nas ações ofensivas.",
    bullets: [
      "Boa ergonomia para sessões pedagógicas e treinos graduais.",
      "Utilização orientada para progressão técnica dos praticantes.",
      "Compatibilidade com exercícios de iniciação e aperfeiçoamento.",
    ],
  },
  {
    title: "Equipamento de jogo",
    description:
      "Equipamento funcional, confortável e adaptado a contextos escolares e comunitários.",
    bullets: [
      "Coletes ou camisolas por equipa.",
      "Calçado apropriado ao piso e à intensidade da prática.",
      "Material de apoio para treino técnico e arbitragem.",
    ],
  },
  {
    title: "Forma de jogar",
    description:
      "O jogo valoriza cooperação, circulação inteligente, movimentação contínua e leitura dos espaços disponíveis.",
    bullets: [
      "Transições rápidas entre defesa e ataque.",
      "Participação activa de todos os jogadores na construção das jogadas.",
      "Ritmo inclusivo, dinâmico e pedagógico.",
    ],
  },
  {
    title: "Fundamentos do jogo",
    description:
      "Base técnica para compreensão e execução eficiente da modalidade.",
    bullets: [
      "Passe, receção e progressão com controlo.",
      "Posicionamento, desmarcação e cobertura.",
      "Finalização com critério e decisão coletiva.",
    ],
  },
  {
    title: "Sistema de pontuação",
    description:
      "Modelo desenhado para valorizar ações bem construídas, disciplina tática e eficácia na conclusão.",
    bullets: [
      "Pontuação associada à execução correta dentro das regras oficiais.",
      "Valorização de jogadas organizadas e decisões técnicas consistentes.",
      "Leitura simples para árbitros, atletas e público iniciante.",
    ],
  },
  {
    title: "Capacidades psicomotoras trabalhadas",
    description:
      "A modalidade estimula desenvolvimento integral de quem pratica.",
    bullets: [
      "Coordenação, equilíbrio e agilidade.",
      "Percepção espacial, tempo de reação e lateralidade.",
      "Concentração, autocontrolo e colaboração.",
    ],
  },
];

export const rulesSections = [
  {
    title: "Regras oficiais",
    items: [
      "A organização do jogo deve preservar segurança, disciplina táctica e igualdade entre as equipas.",
      "A circulação da bola e a ocupação dos espaços seguem referências definidas em regulamento.",
      "A introdução pedagógica das regras deve ser progressiva para novos praticantes.",
    ],
  },
  {
    title: "Faltas",
    items: [
      "Contactos indevidos, obstruções e ações que comprometam a integridade dos praticantes.",
      "Condutas antidesportivas e reincidências podem gerar advertências e sanções.",
      "A arbitragem deve atuar com clareza e consistência na interpretação das infrações.",
    ],
  },
  {
    title: "Pontuação",
    items: [
      "A contagem é realizada conforme a finalização regulamentar das jogadas.",
      "Critérios de validação devem ser transparentes para atletas, comissão técnica e público.",
      "Empates e critérios de desempate podem ser definidos conforme a competição.",
    ],
  },
  {
    title: "Papel dos jogadores e do árbitro",
    items: [
      "Jogadores devem respeitar o plano coletivo, a ética competitiva e as decisões técnicas.",
      "O árbitro garante fluidez, justiça e proteção do ambiente de aprendizagem e competição.",
      "Treinadores e monitores ajudam a consolidar cultura de fair play e evolução técnica.",
    ],
  },
];

export const featuredVideos: VideoItem[] = [
  {
    title: "Apresentação institucional do COFOBOL",
    description:
      "Vídeo reservado para a apresentação oficial da modalidade ao público, parceiros e praticantes.",
    category: "Apresentação da modalidade",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Como jogar COFOBOL",
    description:
      "Espaço preparado para vídeo explicativo sobre movimentação, fundamentos e dinâmica coletiva.",
    category: "Como jogar",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Regras e arbitragem",
    description:
      "Conteúdo pensado para orientar atletas, treinadores e árbitros sobre a leitura oficial do jogo.",
    category: "Regras",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Treinos e exercícios de base",
    description:
      "Área destinada a exercícios técnicos, aquecimento específico e progressões metodológicas.",
    category: "Treinos",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Competições e demonstrações",
    description:
      "Vídeos para apresentar jogos, eventos públicos e momentos de expansão da modalidade.",
    category: "Competições",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Entrevistas e cursos",
    description:
      "Espaço para depoimentos, entrevistas e gravações das formações de treinadores.",
    category: "Cursos",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
  },
];

export const gallerySeed: GalleryItem[] = [
  {
    title: "Sessão demonstrativa",
    category: "Jogos",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    alt: "Grupo em atividade desportiva coletiva",
  },
  {
    title: "Treino técnico",
    category: "Treinos",
    imageUrl:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80",
    alt: "Atletas em treino com bola",
  },
  {
    title: "Formação em grupo",
    category: "Formações",
    imageUrl:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
    alt: "Sessão de formação desportiva",
  },
  {
    title: "Ativação comunitária",
    category: "Eventos",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    alt: "Pessoas reunidas para atividade desportiva",
  },
  {
    title: "Preparação da equipa",
    category: "Treinos",
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    alt: "Equipa a preparar-se para jogo",
  },
  {
    title: "Momento de celebração",
    category: "Jogos",
    imageUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    alt: "Celebração após atividade coletiva",
  },
];

export const newsSeed: NewsItem[] = [
  {
    title: "Formação para Treinadores Desportivos de COFOBOL - Nível I",
    dateLabel: "05 a 09 de Maio de 2026",
    location: "Estádio Municipal do Tafe, Cabinda",
    description:
      "Curso com 20 horas de carga horária, certificação e vagas limitadas para professores, treinadores comunitários, ex-atletas e interessados na carreira de treinador.",
    category: "Curso",
  },
  {
    title: "Apresentações públicas da modalidade",
    dateLabel: "Agenda em atualização",
    location: "Escolas, bairros e comunidades",
    description:
      "O site está preparado para divulgar demonstrações, ativações comunitárias e novos pontos de prática do COFOBOL.",
    category: "Demonstração",
  },
  {
    title: "Novas turmas e parcerias institucionais",
    dateLabel: "Inscrições contínuas",
    location: "Formato presencial e comunitário",
    description:
      "Espaço editorial para abrir novas turmas, comunicar campeonatos e divulgar programas escolares ligados à modalidade.",
    category: "Notícia",
  },
];

export const courseInfo = {
  title: "Formação para Treinadores Desportivos de COFOBOL - Nível I",
  location: "Estádio Municipal do Tafe, Cabinda",
  date: "05 a 09 de Maio de 2026",
  time: "08h às 12h e 14h às 18h",
  workload: "20 horas com certificação",
  audience:
    "Professores de Educação Física, treinadores comunitários, ex-atletas, desportistas e interessados na carreira de treinador",
  vacancies: "Vagas limitadas",
  whatsappUrl: getWhatsAppUrl(
    "Olá! Quero inscrever-me no curso Formação para Treinadores Desportivos de COFOBOL - Nível I."
  ),
  informationUrl: getWhatsAppUrl(
    "Olá! Gostaria de solicitar informações sobre a formação de treinadores de COFOBOL."
  ),
};

export const institutionalHighlights = [
  {
    title: "Criado em Angola",
    description:
      "A identidade da modalidade nasce do contexto angolano e reforça inovação desportiva com raízes locais.",
  },
  {
    title: "Colectivo e educativo",
    description:
      "Foi pensado para ensinar, incluir, organizar equipas e criar experiências acessíveis para novos públicos.",
  },
  {
    title: "Escalável",
    description:
      "Pode crescer com vídeos, formações, eventos, clubes, escolas e futura área de treinadores certificados.",
  },
];
