import { useEffect, useRef, useState } from 'react';
import {
  aliasParts,
  bootLines,
  characters,
  comparisonRows,
  gibsonFiles,
  linkCategories,
  movieFacts,
  movieTimeline,
  navItems,
  quizQuestions,
  terminalCommandMap,
  type NavItem
} from './data/siteData';

const randomAlias = () => {
  const adjective = aliasParts.adjective[Math.floor(Math.random() * aliasParts.adjective.length)];
  const noun = aliasParts.noun[Math.floor(Math.random() * aliasParts.noun.length)];
  return `${adjective} ${noun}`;
};

function App() {
  const [bootComplete, setBootComplete] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [reduceEffects, setReduceEffects] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [alias, setAlias] = useState(randomAlias);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [terminalValue, setTerminalValue] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'ACCESS GRANTED. Type "help" to inspect the archive.'
  ]);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const currentQuestion = quizQuestions[quizIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncReduceMotion = () => {
      setReduceEffects(mediaQuery.matches);
      if (mediaQuery.matches) {
        setBootComplete(true);
      }
    };

    syncReduceMotion();
    mediaQuery.addEventListener('change', syncReduceMotion);

    const bootTimer = mediaQuery.matches
      ? undefined
      : window.setTimeout(() => setBootComplete(true), 2200);

    return () => {
      mediaQuery.removeEventListener('change', syncReduceMotion);
      if (bootTimer !== undefined) {
        window.clearTimeout(bootTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: reduceEffects ? 'auto' : 'smooth', block: 'start' });
      section.focus({ preventScroll: true });
    }
    setMenuOpen(false);
  };

  const runTerminalCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === 'clear') {
      setTerminalLines(['ARCHIVE BUFFER CLEARED.']);
      setTerminalValue('');
      return;
    }

    const response = terminalCommandMap[command] ?? [
      'Command rejected. Safe mode active.',
      'Try: help, about, characters, gibson, timeline, soundtrack, links, hack-the-planet'
    ];

    setTerminalLines((previous) => [
      ...previous,
      `$ ${command}`,
      ...response
    ]);
    setTerminalValue('');
  };

  const handleAnswer = (option: string) => {
    setSelectedAnswers((previous) => ({ ...previous, [currentQuestion.id]: option }));
  };

  const completedQuizCount = Object.keys(selectedAnswers).length;

  const nextQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((previous) => previous + 1);
    } else {
      setQuizIndex(0);
      setSelectedAnswers({});
    }
  };

  const navButton = (item: NavItem) => (
    <button
      key={item.id}
      type="button"
      className="nav-link"
      onClick={() => scrollToSection(item.id)}
    >
      {item.label}
    </button>
  );

  return (
    <div className={`site-shell ${reduceEffects ? 'reduced-motion' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {!bootComplete && (
        <div className="boot-overlay">
          <div className="boot-window">
            <div role="status" aria-live="polite">
              {bootLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button type="button" className="boot-skip" onClick={() => setBootComplete(true)}>
              Skip Boot Sequence
            </button>
          </div>
        </div>
      )}

      <header className="topbar panel">
        <div className="brand-block">
          <div className="brand-mark">H</div>
          <div>
            <div className="brand-name">HACK THE PLANET</div>
            <small>1995 cyberculture archive</small>
          </div>
        </div>

        <button
          ref={menuToggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? 'Close menu' : 'Menu'}
        </button>

        <nav id="main-navigation" className={`primary-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map(navButton)}
        </nav>
      </header>

      <main id="main-content" className="page-shell" tabIndex={-1}>
        <section id="home" className="hero panel" tabIndex={-1}>
          <div className="hero-copy">
            <p className="eyebrow">UNOFFICIAL DIGITAL TIME CAPSULE</p>
            <h1>HACK THE PLANET</h1>
            <p className="subtitle">
              An archive for the movie that turned neon, dial-up, and impossible confidence into a cult classic.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => scrollToSection('movie')}>
                Enter the Archive
              </button>
              <button
                type="button"
                className="secondary-button"
                aria-pressed={reduceEffects}
                onClick={() => setReduceEffects((previous) => !previous)}
              >
                {reduceEffects ? 'Restore Effects' : 'Reduce Effects'}
              </button>
            </div>
            <p className="disclaimer">
              This is an unofficial fan project created for educational and portfolio purposes and is not affiliated with the filmmakers, studios, actors, or rights holders.
            </p>
          </div>

          <div className="hero-terminal" aria-label="Terminal showcase">
            <div className="terminal-header">
              <span className="signal signal-green" />
              <span className="signal signal-yellow" />
              <span className="signal signal-red" />
            </div>
            <div className="terminal-body">
              <p>root@archive:~$ boot --mode=neon</p>
              <p>loading archive ... 92%</p>
              <p>warning: corporate firewall bypassed</p>
              <p className="pulse">status: online / 1995 aesthetic / safe-mode</p>
            </div>
          </div>
        </section>

        <section id="movie" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">The Movie</p>
            <h2>Why this film still feels like a warning siren from the future.</h2>
          </div>

          <div className="movie-grid">
            <div>
              <p>
                <strong>Release Year:</strong> {movieFacts.releaseYear}
              </p>
              <p>
                <strong>Director:</strong> {movieFacts.director}
              </p>
              <p>
                <strong>Writer:</strong> {movieFacts.writer}
              </p>
              <p>{movieFacts.summary}</p>
              <p>{movieFacts.tagline}</p>
            </div>

            <aside className="faux-panel">
              <p className="small-label">Spoiler warning</p>
              <p>
                The film’s teenage rebellion, social engineering, and obsession with data theft are part of its theatrical appeal — a pulse of style and danger more than a realistic blueprint.
              </p>
            </aside>
          </div>

          <div className="timeline">
            {movieTimeline.map((entry) => (
              <div key={entry.year} className="timeline-item">
                <span className="timeline-year">{entry.year}</span>
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.detail}</p>
                  <a
                    className="timeline-source"
                    href={entry.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: {entry.source.label} (opens in a new tab)
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="characters" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">Meet the Hackers</p>
            <h2>Classified dossiers from the underground.</h2>
          </div>

          <div className="character-grid">
            {characters.map((character) => (
              <article key={character.name} className="character-card">
                <div className="card-header">
                  <div>
                    <p className="small-label">Alias</p>
                    <h3>{character.alias}</h3>
                  </div>
                  <span className="access-level">{character.accessLevel}</span>
                </div>
                <p className="character-name">{character.name}</p>
                <p className="character-role">{character.role}</p>
                <p>{character.summary}</p>
                <ul>
                  <li>
                    Actor:{' '}
                    <a
                      href={character.actorReference}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${character.actor} biography (opens in a new tab)`}
                    >
                      {character.actor}
                    </a>
                  </li>
                  <li>Trait: {character.trait}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="gibson" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">The Gibson Files</p>
            <h2>Case files from a fictional security archive.</h2>
          </div>

          <div className="gibson-grid">
            {gibsonFiles.map((entry) => (
              <article key={entry.title} className="case-card">
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
                <p className="case-fact">{entry.fact}</p>
              </article>
            ))}
          </div>
          <p className="ethical-note">
            Educational notice: this section is for learning about security history and culture, not for unauthorized access or tactics.
          </p>
        </section>

        <section id="compare" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">1995 vs. Today</p>
            <h2>From dial-up theater to real-world defense.</h2>
          </div>

          <div className="comparison-table" role="table" aria-label="Technology comparison table">
            <div className="comparison-row comparison-header">
              <strong>1995</strong>
              <strong>Today</strong>
            </div>
            {comparisonRows.map(([past, present]) => (
              <div key={`${past}-${present}`} className="comparison-row">
                <span>{past}</span>
                <span>{present}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="sound" className="content-section panel split-layout" tabIndex={-1}>
          <div>
            <div className="section-heading">
              <p className="eyebrow">Sound and Style</p>
              <h2>Neon, rave culture, and a CRT glow.</h2>
            </div>
            <p>
              The movie uses clubs, fashion, and synthetic rhythm to make computing feel like a lifestyle and a rebellion.
            </p>
            <p>
              Its aesthetic reflects the decade’s mix of underground nightlife, early digital ambition, and bright, theatrical confidence.
            </p>
          </div>

          <div className="now-playing panel inner-panel" aria-label="Now playing UI">
            <p className="small-label">Now Playing</p>
            <h3>NEON VIRTUAL / 1995 MIX</h3>
            <div className="equalizer" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>club pulse // synthline // cyber-dreams</p>
          </div>
        </section>

        <section id="legacy" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">Legacy</p>
            <h2>The movie still matters for the stories we tell about code and rebellion.</h2>
          </div>
          <p>
            It helped shape how Hollywood imagined digital life: loud, glamorous, dangerous, and a little bit theatrical. That imagery still shows up in hacker culture, cyberpunk storytelling, and the language of cybersecurity.
          </p>
          <p>
            Even when the movie is inaccurate, it remains memorable because it turns abstract systems into characters, style, and tension. That’s part of its lasting power.
          </p>
        </section>

        <section id="links" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">Curated Link Directory</p>
            <h2>Useful references, archives, and security resources.</h2>
          </div>

          <div className="link-groups">
            {linkCategories.map((category) => (
              <div key={category.title} className="link-group">
                <h3>{category.title}</h3>
                <ul>
                  {category.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} (opens in a new tab)`}
                      >
                        {link.label}
                      </a>
                      <span> — {link.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="content-section panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">About This Project</p>
            <h2>Made for curiosity, education, and a love of 1990s imagination.</h2>
          </div>
          <p>
            This site is an unofficial fan project created for educational and portfolio purposes. It is noncommercial and inspired by the aesthetic and cultural legacy of the film. It is not affiliated with MGM, United Artists, the filmmakers, actors, or rights holders.
          </p>
          <div className="utility-row">
            <div className="alias-box">
              <p className="small-label">Alias generator</p>
              <h3>{alias}</h3>
              <button type="button" className="secondary-button" onClick={() => setAlias(randomAlias())}>
                Generate Handle
              </button>
            </div>

            <div className="quiz-box">
              <p className="small-label">1995 technology quiz</p>
              <h3>{currentQuestion.prompt}</h3>
              <div className="quiz-options" role="group" aria-label={`Answers for ${currentQuestion.prompt}`}>
                {currentQuestion.options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={`quiz-option ${selectedAnswers[currentQuestion.id] === option ? 'selected' : ''}`}
                    aria-pressed={selectedAnswers[currentQuestion.id] === option}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selectedAnswers[currentQuestion.id] && (
                <div className="quiz-feedback" role="status">
                  <p>
                    {selectedAnswers[currentQuestion.id] === currentQuestion.correct
                      ? 'Correct.'
                      : `Close — the right answer is: ${currentQuestion.correct}.`}
                  </p>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              <button type="button" className="primary-button" onClick={nextQuestion}>
                {quizIndex === quizQuestions.length - 1 ? 'Restart quiz' : 'Next question'}
              </button>
              <small>{completedQuizCount}/{quizQuestions.length} answered</small>
            </div>
          </div>
        </section>

        <section className="content-section panel terminal-panel" tabIndex={-1}>
          <div className="section-heading">
            <p className="eyebrow">Terminal Command Interface</p>
            <h2>Type a safe command into the archive.</h2>
          </div>

          <div className="terminal-console" aria-live="polite">
            <div className="console-output">
              {terminalLines.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>
            <form
              className="console-form"
              onSubmit={(event) => {
                event.preventDefault();
                runTerminalCommand(terminalValue);
              }}
            >
              <label className="sr-only" htmlFor="terminal-command">Command</label>
              <input
                id="terminal-command"
                type="text"
                value={terminalValue}
                onChange={(event) => setTerminalValue(event.target.value)}
                placeholder="Type command..."
              />
              <button type="submit" className="primary-button">Execute</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
