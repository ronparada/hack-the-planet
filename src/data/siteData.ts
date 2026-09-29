export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'movie', label: 'The Movie' },
  { id: 'characters', label: 'Meet the Hackers' },
  { id: 'gibson', label: 'The Gibson Files' },
  { id: 'compare', label: '1995 vs. Today' },
  { id: 'sound', label: 'Sound and Style' },
  { id: 'legacy', label: 'Legacy' },
  { id: 'links', label: 'Link Directory' },
  { id: 'about', label: 'About This Project' }
];

export const bootLines = [
  'BOOTING GIBSON ARCHIVE...',
  'ESTABLISHING DIAL-UP CONNECTION...',
  'BYPASSING CORPORATE FIREWALL...',
  'ACCESS GRANTED.'
];

export const movieFacts = {
  releaseYear: '1995',
  director: 'Iain Softley',
  writer: 'Rafael Moreu',
  summary:
    'A high-energy cyber-thriller about a teenage prodigy, an underground hacker collective, and the collision between digital rebellion and corporate control.',
  tagline: 'The movie imagined cyberspace as a neon-soaked public square where secrets moved at the speed of a keystroke.'
};

export const references = {
  film: {
    label: 'Wikipedia: Hackers (1995 film)',
    url: 'https://en.wikipedia.org/wiki/Hackers_(film)'
  },
  imdb: {
    label: 'IMDb: Hackers',
    url: 'https://www.imdb.com/title/tt0113243/'
  },
  actors: {
    jonnyLeeMiller: 'https://en.wikipedia.org/wiki/Jonny_Lee_Miller',
    angelinaJolie: 'https://en.wikipedia.org/wiki/Angelina_Jolie',
    matthewLillard: 'https://en.wikipedia.org/wiki/Matthew_Lillard',
    renolySantiago: 'https://en.wikipedia.org/wiki/Renoly_Santiago',
    laurenceMason: 'https://en.wikipedia.org/wiki/Laurence_Mason',
    fisherStevens: 'https://en.wikipedia.org/wiki/Fisher_Stevens'
  }
};

export const movieTimeline = [
  {
    year: '1988 (in the story)',
    title: 'Dade’s backstory',
    detail: 'The film opens with a fictional incident in which 11-year-old Dade crashes computer systems and is banned from using computers until age 18.',
    source: references.film
  },
  {
    year: '1995',
    title: 'The film is released',
    detail: 'Iain Softley’s thriller introduces Dade, Acid Burn, and their hacker crew.',
    source: references.film
  },
  {
    year: 'Later reception',
    title: 'A cult classic',
    detail: 'The film’s later cult-classic reputation differs from its mixed critical reception and modest box-office performance on release.',
    source: references.film
  }
];

export const characters = [
  {
    name: 'Dade Murphy',
    alias: 'Crash Override',
    actor: 'Jonny Lee Miller',
    actorReference: references.actors.jonnyLeeMiller,
    role: 'Lead hacker / prodigy',
    trait: 'Chaotic genius',
    accessLevel: 'Level 9',
    summary: 'The teenage renegade whose talent, ego, and rebellious energy make him the center of the film’s digital chaos.'
  },
  {
    name: 'Kate Libby',
    alias: 'Acid Burn',
    actor: 'Angelina Jolie',
    actorReference: references.actors.angelinaJolie,
    role: 'Elite codebreaker',
    trait: 'Pride with precision',
    accessLevel: 'Level 8',
    summary: 'A brilliant hacker whose confidence and cold focus make her both formidable and unforgettable.'
  },
  {
    name: 'Cereal Killer',
    alias: 'Cereal Killer',
    actor: 'Matthew Lillard',
    actorReference: references.actors.matthewLillard,
    role: 'Digital mischief maker',
    trait: 'Chaotic energy',
    accessLevel: 'Level 6',
    summary: 'A loud, unpredictable member of the crew whose antics feel equal parts menace and comedy.'
  },
  {
    name: 'Phantom Phreak',
    alias: 'Phantom Phreak',
    actor: 'Renoly Santiago',
    actorReference: references.actors.renolySantiago,
    role: 'Phone phreak / insider',
    trait: 'Streetwise talent',
    accessLevel: 'Level 6',
    summary: 'The one who understands the old analog infrastructure and how it can be bent into a weapon or a joke.'
  },
  {
    name: 'Lord Nikon',
    alias: 'Lord Nikon',
    actor: 'Laurence Mason',
    actorReference: references.actors.laurenceMason,
    role: 'Hacker / crew member',
    trait: 'Stylish menace',
    accessLevel: 'Level 5',
    summary: 'A performer of the scene, mixing technical competence with a sense of theater and intimidation.'
  },
  {
    name: 'Eugene Belford',
    alias: 'The Plague',
    actor: 'Fisher Stevens',
    actorReference: references.actors.fisherStevens,
    role: 'Corporate antagonist',
    trait: 'Arrogant architect',
    accessLevel: 'Level 4',
    summary: 'A charismatic villain whose corporate vision turns the digital world into a power game.'
  }
];

export const gibsonFiles = [
  {
    title: 'The Gibson supercomputer',
    summary: 'A dramatic, almost mythic machine used to visualize the speed and scale of digital systems in a cinematic way.',
    fact: 'Real: large-scale computing and network topology are real concerns. Fictional: the exaggerated omnipotence is not how modern systems work.'
  },
  {
    title: 'Phone phreaking',
    summary: 'The film leans heavily on tones, dial signals, and social engineering to move through analog phone systems.',
    fact: 'Real: telecom systems have historically had weaknesses. Dramatic: the movie turns those methods into a clean, stylized action sequence.'
  },
  {
    title: 'Social engineering',
    summary: 'Humans are often the easiest route to trust, access, or data leakage.',
    fact: 'Real: social engineering remains a core threat in cybersecurity. Fictional: the villain’s methods are dramatized for pace and entertainment.'
  },
  {
    title: 'Cookie Monster',
    summary: 'The film depicts a malicious computer program as a visual, almost theatrical force.',
    fact: 'Real: malware does exist, but these sequences are exaggerated for cinematic impact and a memorable symbol.'
  }
];

export const comparisonRows = [
  ['Dial-up modems', 'Fiber, cable, 5G, and satellite internet'],
  ['Payphones', 'Smartphones and connected devices'],
  ['Floppy disks', 'Cloud storage and USB drives'],
  ['Bulletin boards and chat rooms', 'Social media and online communities'],
  ['Passwords and local controls', 'Password managers, MFA, and passkeys'],
  ['Hollywood hacking', 'Modern defensive cybersecurity operations']
];

export const linkCategories = [
  {
    title: 'Film references',
    links: [
      {
        label: references.imdb.label,
        description: 'IMDb title page for film credits and release information.',
        url: references.imdb.url
      },
      {
        label: references.film.label,
        description: 'An overview of the film, cast, plot, and reception; used as the cast and timeline reference on this page.',
        url: references.film.url
      }
    ]
  },
  {
    title: 'Cybersecurity history',
    links: [
      {
        label: 'CISA',
        description: 'A trusted U.S. resource for cybersecurity guidance and protective practices.',
        url: 'https://www.cisa.gov/'
      },
      {
        label: 'NIST Cybersecurity',
        description: 'Public standards and explanations of the modern security landscape.',
        url: 'https://www.nist.gov/cyberframework'
      }
    ]
  },
  {
    title: 'Retro-computing resources',
    links: [
      {
        label: 'Internet Archive',
        description: 'A huge public archive of early web culture and digital ephemera.',
        url: 'https://archive.org/'
      },
      {
        label: 'Computer History Museum',
        description: 'A museum-backed look at the hardware and culture behind computing history.',
        url: 'https://computerhistory.org/'
      }
    ]
  }
];

export const quizQuestions = [
  {
    id: 'modem',
    prompt: 'Which technology best matched 1995 internet access for many homes?',
    options: ['Dial-up modem', 'Fiber internet', '5G network', 'Satellite dish'],
    correct: 'Dial-up modem',
    explanation: 'Dial-up connections defined the sound and patience of the early web — a noisy, visible sign that you were online.'
  },
  {
    id: 'storage',
    prompt: 'Which removable storage medium was common for personal computers in the 1990s?',
    options: ['Floppy disks', 'Cloud folders', 'USB-C drives', 'Streaming servers'],
    correct: 'Floppy disks',
    explanation: 'Before cloud services and USB drives, floppy disks were a visible, tactile way to move data around.'
  },
  {
    id: 'style',
    prompt: 'Which of these was a real security threat that the movie exaggerated for drama?',
    options: ['Social engineering', 'Textile hacking', 'Quantum key theft', 'Neon signal spoofing'],
    correct: 'Social engineering',
    explanation: 'Human trust is a genuine weakness in the real world, and the film made that idea feel dramatic and theatrical.'
  }
];

export const aliasParts = {
  adjective: ['Neon', 'Crash', 'Zero', 'Phantom', 'Acid', 'Circuit', 'Ghost', 'Vector'],
  noun: ['Cipher', 'Signal', 'Byte', 'Static', 'Crux', 'Vector', 'Drifter', 'Raster']
};

export const terminalCommandMap: Record<string, string[]> = {
  help: [
    'Available commands: help, about, characters, gibson, timeline, soundtrack, links, clear, hack-the-planet',
    'Use them to navigate the archive or trigger harmless Easter eggs.'
  ],
  about: [
    'UNOFFICIAL FAN ARCHIVE',
    'This project is a noncommercial tribute to an iconic cyberpunk film and its 1990s internet culture.'
  ],
  characters: [
    'Loading hacker dossiers...',
    'Crash Override, Acid Burn, Cereal Killer, Phantom Phreak, Lord Nikon, and The Plague are online.'
  ],
  gibson: [
    'GIBSON FILES',
    'Case notes uploaded: supercomputer, phone phreaking, social engineering, and the Cookie Monster myth.'
  ],
  timeline: [
    'TIMELINE',
    '1995 arrival -> cult recognition -> cyberculture replay -> ongoing cultural relevance.'
  ],
  soundtrack: [
    'NOW PLAYING',
    'Synthwave pulse, club energy, and a glowing CRT haze over downtown neon underpass rhythms.'
  ],
  links: [
    'LINK DIRECTORY',
    'Public references, retro-computing archives, and cybersecurity resources are queued for review.'
  ],
  clear: ['BUFFER CLEARED. ARCHIVE READY.'],
  'hack-the-planet': [
    'SYSTEM ALERT',
    'A harmless rainbow signal has been injected into the archive. The network remains safe and legal.'
  ]
};
