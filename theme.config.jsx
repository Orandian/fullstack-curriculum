export default {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>
      🚀 Fullstack Dev Program
    </span>
  ),
  project: {
    link: 'https://github.com/Orandian/fullstack-curriculum',
  },
  docsRepositoryBase: 'https://github.com/Orandian/fullstack-curriculum/blob/main',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Fullstack Developer Program · Batch 1 · React + Node.js
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="12-Month Fullstack Developer Curriculum — React + Node.js" />
      <title>Fullstack Dev Program</title>
    </>
  ),
  primaryHue: 210,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
  },
}
