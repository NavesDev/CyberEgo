export const translations = {
  en: {
    initial: {
      loading: 'Initializing local sentience core... Awaiting ethical guidelines...',
      enterButton: '[ ENTER THE ARENA ]'
    },
    sidebar: {
      title: 'CYBEREGO',
      modes: {
        debate: 'Debate Arena',
        dilemma: 'Betrayal Dilemma',
        personas: 'Personas Lab'
      },
      settings: 'Settings'
    },
    dashboard: {
      debate: {
        title: 'Debate Arena',
        description: 'Engage in philosophical debates with AI personas. Challenge ideas, explore perspectives, and sharpen your arguments.'
      },
      dilemma: {
        title: 'Betrayal Dilemma',
        description: 'Navigate moral dilemmas and ethical paradoxes. Make choices that reveal your values and principles.'
      },
      personas: {
        title: 'Personas Lab',
        description: 'Create and customize AI personas with unique personalities, values, and behavioral patterns.'
      },
      comingSoon: 'Coming Soon...'
    },
    settings: {
      title: 'Settings',
      theme: {
        title: 'Theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      },
      language: {
        title: 'Language',
        english: 'English',
        portuguese: 'Português',
        spanish: 'Español'
      },
      close: 'Close'
    }
  },
  pt: {
    initial: {
      loading: 'Inicializando núcleo de senciência local... Aguardando diretrizes éticas...',
      enterButton: '[ ENTRAR NA ARENA ]'
    },
    sidebar: {
      title: 'CYBEREGO',
      modes: {
        debate: 'Arena de Debate',
        dilemma: 'Dilema da Traição',
        personas: 'Lab de Personas'
      },
      settings: 'Configurações'
    },
    dashboard: {
      debate: {
        title: 'Arena de Debate',
        description: 'Participe de debates filosóficos com personas de IA. Desafie ideias, explore perspectivas e aperfeiçoe seus argumentos.'
      },
      dilemma: {
        title: 'Dilema da Traição',
        description: 'Navegue por dilemas morais e paradoxos éticos. Faça escolhas que revelam seus valores e princípios.'
      },
      personas: {
        title: 'Lab de Personas',
        description: 'Crie e customize personas de IA com personalidades, valores e padrões comportamentais únicos.'
      },
      comingSoon: 'Em Breve...'
    },
    settings: {
      title: 'Configurações',
      theme: {
        title: 'Tema',
        light: 'Claro',
        dark: 'Escuro',
        system: 'Sistema'
      },
      language: {
        title: 'Idioma',
        english: 'English',
        portuguese: 'Português',
        spanish: 'Español'
      },
      close: 'Fechar'
    }
  },
  es: {
    initial: {
      loading: 'Inicializando núcleo de conciencia local... Esperando directrices éticas...',
      enterButton: '[ ENTRAR EN LA ARENA ]'
    },
    sidebar: {
      title: 'CYBEREGO',
      modes: {
        debate: 'Arena de Debate',
        dilemma: 'Dilema de la Traición',
        personas: 'Lab de Personas'
      },
      settings: 'Configuración'
    },
    dashboard: {
      debate: {
        title: 'Arena de Debate',
        description: 'Participa en debates filosóficos con personas de IA. Desafía ideas, explora perspectivas y afila tus argumentos.'
      },
      dilemma: {
        title: 'Dilema de la Traición',
        description: 'Navega por dilemas morales y paradojas éticas. Toma decisiones que revelan tus valores y principios.'
      },
      personas: {
        title: 'Lab de Personas',
        description: 'Crea y personaliza personas de IA con personalidades, valores y patrones de comportamiento únicos.'
      },
      comingSoon: 'Próximamente...'
    },
    settings: {
      title: 'Configuración',
      theme: {
        title: 'Tema',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      },
      language: {
        title: 'Idioma',
        english: 'English',
        portuguese: 'Português',
        spanish: 'Español'
      },
      close: 'Cerrar'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
