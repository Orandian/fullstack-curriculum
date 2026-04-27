import LanguageSwitcher from './components/LanguageSwitcher'

export default {
  logo: (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontWeight: 700,
      fontSize: '1.05rem',
      letterSpacing: '0.02em',
    }}>
      <span style={{ color: '#00e5ff' }}>&gt;</span>
      {' '}
      <span style={{ color: '#e2e8f0' }}>FULLSTACK</span>
      <span style={{ color: '#ff00ff' }}>_DEV</span>
      <span style={{ color: '#00e5ff' }}>.exe</span>
    </span>
  ),
  project: {
    link: 'https://github.com/Orandian/fullstack-curriculum',
  },
  docsRepositoryBase: 'https://github.com/Orandian/fullstack-curriculum/blob/main',
  navbar: {
    extraContent: <LanguageSwitcher />,
  },
  footer: {
    text: (
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.8rem',
        color: '#00e5ff',
      }}>
        user@fullstack:~${' '}
        <span className="terminal-cursor">_</span>
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="12-Month Fullstack Developer Curriculum — React + Node.js" />
      <title>FULLSTACK_DEV.exe</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  ),
  primaryHue: 185,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: '// edit this page →',
  },
  feedback: {
    content: '// report an issue →',
  },
}
