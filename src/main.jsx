import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'Secure sign-in prototype',
    type: 'Application security',
    description: 'A practice project exploring session handling, access control, and safer defaults for a small web app.',
    details: 'The sample review follows a sign-in flow from login to logout and documents which checks belong on the server.',
  },
  {
    title: 'Community resource finder',
    type: 'Web development',
    description: 'A React directory prototype with search, category filters, and a keyboard-friendly interface.',
    details: 'The sample design focuses on readable results, clear empty states, and a layout that adapts to smaller screens.',
  },
  {
    title: 'Linux hardening notes',
    type: 'Security lab',
    description: 'A sample lab journal on file permissions, service configuration, and reading system logs.',
    details: 'The journal records what changed, why it matters, and how to verify the configuration afterward.',
  },
]

function App() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top"><span aria-hidden="true">A</span> Adarsh</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Web development / Cybersecurity</p>
          <h1 id="intro-title">Building for the web.<br /><span>Learning to secure it.</span></h1>
          <p className="intro-copy">I’m Adarsh, a web developer moving into cybersecurity. I’m interested in how everyday decisions about authentication, permissions, and data handling shape the security of an application.</p>
          <div className="actions">
            <a className="button primary" href="#work">View my work</a>
            <a className="button" href="#contact">Get in touch</a>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <p>Sample projects and learning exercises</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <details>
                  <summary>Project notes<span className="sr-only"> for {project.title}</span></summary>
                  <p>{project.details}</p>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div>
            <h2 id="about-title">About me</h2>
            <p>My background is in building interfaces and working with APIs. That experience made me curious about what happens behind the interface, especially how applications decide who can access what and how those decisions hold up as the app grows.</p>
          </div>
          <div className="focus">
            <h3>What I’m learning</h3>
            <ul>
              <li>Secure coding and code review</li>
              <li>Authentication and authorization</li>
              <li>Linux and networking fundamentals</li>
            </ul>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Get in touch</h2>
            <p>I’d like to meet people working on application security and secure web development.</p>
          </div>
          <a className="button" href="mailto:adarsh@example.com">adarsh@example.com<span className="sr-only"> (sample address)</span></a>
        </section>
      </main>

      <footer>
        <span>Adarsh</span>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
