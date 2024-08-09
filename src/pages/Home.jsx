import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/background1.jpg';

const fullName = 'Aba Opoku';
const personalQuote = 'Strive to be the best version of yourself everyday, one step at a time.';
const professionalSummary = 'IT Professional with more than eight years of proven experience in customer service leadership and project coordination. Familiar with a broad range of programming languages and interactive user interfaces. Possess  knowledge of the entire web development process, command line, and shell scripting. Career supported by the pursuit of a database administrator certification, google python certification and a scrum master certification.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple project, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home