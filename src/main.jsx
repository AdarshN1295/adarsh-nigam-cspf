import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  siBurpsuite, siCloudflare, siGit, siGithub, siHostinger, siInsomnia,
  siPostgresql, siPostman, siRender, siWappalyzer, siWireshark,
} from 'simple-icons'
import './styles.css'
import focusChecklist from './focus-checklist.png'
import heroPortrait from './hero-portrait.png'

const contactEmail = 'adarsh.nigam.career@gmail.com'
const defaultAccent = '#0F766E'

const projects = [
  {
    title: 'Secure sign-in prototype',
    type: 'Application security',
    description: 'A practice project exploring session handling, access control, and safer defaults for a small web app.',
    details: 'The sample review follows a sign-in flow from login to logout and documents which checks belong on the server.',
    takeaway: 'Signing in and having permission to access a specific resource are separate decisions.',
  },
  {
    title: 'Community resource finder',
    type: 'Web development',
    description: 'A React directory prototype with search, category filters, and a keyboard-friendly interface.',
    details: 'The sample design focuses on readable results, clear empty states, and a layout that adapts to smaller screens.',
    takeaway: 'Keeping the search query in the URL makes filtered results easy to share and revisit.',
  },
  {
    title: 'Linux hardening notes',
    type: 'Security lab',
    description: 'A sample lab journal on file permissions, service configuration, and reading system logs.',
    details: 'The journal records what changed, why it matters, and how to verify the configuration afterward.',
    takeaway: 'Recording a baseline makes it easier to verify the effects of a configuration change.',
  },
]

const skills = [
  {
    title: 'Web development',
    overview: 'I build storefronts, websites, and browser tools around the way people use and maintain them.',
    items: [
      ['Shopify & WordPress', 'Develop storefronts and content-driven sites that are easy to update.'],
      ['Static & dynamic websites', 'Build lightweight pages and interactive sites driven by application data.'],
      ['CMS & backend tools', 'Configure publishing workflows and work with APIs and backend services.'],
      ['Chrome extensions & Shopify apps', 'Build browser utilities and add functionality to Shopify stores.'],
    ],
  },
  {
    title: 'Cybersecurity',
    overview: 'I assess web applications and system configurations, then document findings and practical fixes.',
    items: [
      ['Website security analysis', 'Review how web applications handle authentication, permissions, and sensitive data.'],
      ['Vulnerability assessment & penetration testing (VAPT)', 'Assess security weaknesses within an authorized scope and document findings, impact, and remediation.'],
      ['Network configuration & mapping', 'Map devices, connections, and services to understand how traffic moves through a network.'],
      ['System security', 'Review Linux permissions, system services, and logs using shell-based tools.'],
    ],
  },
  {
    title: 'Systems & automation',
    overview: 'I use scripting across Linux and Windows to make routine checks and configuration tasks repeatable.',
    items: [
      ['Linux & Windows', 'Configure and troubleshoot development and lab environments on both platforms.'],
      ['Shell & Bash scripting', 'Automate repeatable tasks, gather system information, and make routine checks easier to run.'],
      ['PowerShell scripting', 'Automate Windows workflows and collect configuration details for review.'],
    ],
  },
]

const toolGroups = [
  {
    title: 'Development & version control',
    tools: [['VS Code', '</>'], ['Shell', '>_'], ['Bash', '$'], ['Git', siGit], ['GitHub', siGithub]],
  },
  {
    title: 'Security & network analysis',
    tools: [['Burp Suite', siBurpsuite], ['Maltego', 'M'], ['Wireshark', siWireshark], ['Wappalyzer', siWappalyzer]],
  },
  {
    title: 'APIs & databases',
    tools: [['pgAdmin', siPostgresql], ['Postman', siPostman], ['Insomnia', siInsomnia]],
  },
  {
    title: 'Hosting & infrastructure',
    tools: [['Render', siRender], ['Cloudflare', siCloudflare], ['Hostinger', siHostinger]],
  },
]

const accentOptions = [
  ['Blue', '#2563EB', '#1D4ED8', '#EDF3FF'],
  ['Forest green', '#216044', '#184A34', '#E9F1EB'],
  ['Violet', '#6D28D9', '#5B21B6', '#F1EAFF'],
  ['Teal', '#0F766E', '#115E59', '#E2F5F1'],
  ['Rose', '#BE185D', '#9D174D', '#FCE8F1'],
  ['Navy', '#1E3A8A', '#172554', '#E9EEFC'],
  ['Indigo', '#4338CA', '#3730A3', '#EEEEFF'],
  ['Ocean blue', '#075985', '#0C4A6E', '#E6F3FA'],
  ['Deep cyan', '#155E75', '#164E63', '#E4F5F9'],
  ['Slate', '#475569', '#334155', '#EBEFF4'],
  ['Charcoal', '#374151', '#1F2937', '#ECEEF2'],
  ['Emerald', '#047857', '#065F46', '#E5F5ED'],
  ['Olive', '#4D621A', '#3F5016', '#EEF2E3'],
  ['Moss', '#3F6212', '#365314', '#EDF4E2'],
  ['Plum', '#86198F', '#701A75', '#FAEDFB'],
  ['Mulberry', '#8B2855', '#702044', '#F8EAF0'],
  ['Crimson', '#B91C1C', '#991B1B', '#FCEBEB'],
  ['Terracotta', '#9A3412', '#7C2D12', '#FBEDE6'],
  ['Amber', '#854D0E', '#713F12', '#FBF0DB'],
  ['Espresso', '#70452C', '#573522', '#F4ECE6'],
]

function App() {
  const [activeSkill, setActiveSkill] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [accent, setAccent] = useState(defaultAccent)
  const [copyStatus, setCopyStatus] = useState('')
  const [, , accentHover, accentSoft] = accentOptions.find((option) => option[1] === accent)
  const { title: activeSkillTitle, overview, items: activeSkillItems } = skills[activeSkill]

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true })
    return () => lenis.destroy()
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Clipboard unavailable. You can select and copy the address above.')
    }
  }

  return (
    <div id="top" style={{ '--accent': accent, '--accent-hover': accentHover, '--accent-soft': accentSoft }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="theme-bar" hidden>
        <label htmlFor="theme-accent">Preview accent color</label>
        <select id="theme-accent" value={accent} onChange={(event) => setAccent(event.target.value)}>
          {accentOptions.map(([label, value]) => (
            <option key={value} value={value}>{label} · {value}</option>
          ))}
        </select>
      </div>
      <header className="page site-header">
        <a className="brand" href="#top"><span aria-hidden="true">A</span> Adarsh</a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-icon" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" data-open={menuOpen}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Domains of work</a>
          <a href="#tools" onClick={() => setMenuOpen(false)}>Tools</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="page intro" aria-labelledby="intro-title">
          <div className="intro-content">
            <h1 id="intro-title">From building web applications to <span>defending them.</span></h1>
            <p className="intro-copy">I’m Adarsh Nigam, a web developer moving into cybersecurity. I build websites, Shopify apps, and Chrome extensions, and bring that development experience to website security assessments and network mapping.</p>
            <div className="actions">
              <a className="button primary" href="#skills">Explore my work</a>
              <a className="button" href="#contact">Get in touch</a>
            </div>
          </div>
          <img className="hero-portrait" src={heroPortrait} alt="Graphite portrait of Adarsh Nigam with teal accents" />
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="page about-content">
            <div>
              <h2 id="about-title">About me</h2>
              <p>Working on storefronts, content management systems, and browser tools taught me to follow how data moves through an application and where permissions are enforced.</p>
              <p>In cybersecurity, I use that perspective to review website behavior and document findings. I also use Bash and PowerShell to automate routine checks on Linux and Windows.</p>
            </div>
            <div className="focus">
              <div className="focus-heading">
                <img src={focusChecklist} width="52" height="52" alt="" />
                <h3>Current focus</h3>
              </div>
              <ul>
                <li>Website security analysis</li>
                <li>Network configuration and mapping</li>
                <li>Linux security and shell automation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Domains of work</h2>
          </div>
          <div className="expertise">
            <div className="expertise-options" role="group" aria-label="Areas of expertise">
              {skills.map(({ title }, index) => (
                <button
                  key={title}
                  type="button"
                  aria-pressed={activeSkill === index}
                  aria-controls="expertise-panel"
                  onClick={() => setActiveSkill(index)}
                >
                  {title}
                </button>
              ))}
            </div>
            <section className="expertise-panel" id="expertise-panel" aria-labelledby="expertise-panel-title">
              <div className="expertise-intro">
                <h3 id="expertise-panel-title">{activeSkillTitle}</h3>
                <p>{overview}</p>
              </div>
              <dl>
                {activeSkillItems.map(([name, description]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </section>

        <section className="page section" id="tools" aria-labelledby="tools-title">
          <div className="section-heading">
            <h2 id="tools-title">Tools I use</h2>
          </div>
          <div className="tool-grid">
            {toolGroups.map(({ title, tools }) => (
              <div className="tool-group" key={title}>
                <h3>{title}</h3>
                <ul>
                  {tools.map(([name, icon]) => (
                    <li key={name}>
                      <span className="tool-icon" aria-hidden="true">
                        {typeof icon === 'string' ? icon : (
                          <svg viewBox="0 0 24 24" width="19" height="19" focusable="false">
                            <path d={icon.path} fill="currentColor" />
                          </svg>
                        )}
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="page section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Projects</h2>
          </div>
          <div className="projects-preview">
            <p className="projects-notice">This website is being updated and is under construction.</p>
            <div className="project-grid projects-blurred" inert aria-hidden="true">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <details>
                    <summary>Project notes<span className="sr-only"> for {project.title}</span></summary>
                    <p>{project.details}</p>
                    <p><strong>Takeaway.</strong> {project.takeaway}</p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page section contact" id="contact" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Get in touch</h2>
            <p>Get in touch to discuss web development projects, application security, or opportunities that bring the two together.</p>
          </div>
          <div className="email-card">
            <a className="email-address" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <div className="email-actions">
              <a className="button primary" href={`mailto:${contactEmail}`}>Send email</a>
              <button className="button" type="button" onClick={copyEmail}>Copy email</button>
            </div>
            <p className="copy-status" role="status">{copyStatus}</p>
          </div>
        </section>
      </main>

      <footer className="page">
        <span>Web development &amp; cybersecurity portfolio</span>
      </footer>
      <a className="back-to-top" href="#top" aria-label="Back to top" title="Back to top">
        <span aria-hidden="true">↑</span>
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
