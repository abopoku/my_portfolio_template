import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/background1.jpg';

const fullName = 'Aba Opoku';
const title = 'Full Stack Developer';
const personalQuote = 'Strive to be the best version of yourself everyday, one step at a time.';
const professionalSummary = 'IT Professional with more than eight years of proven experience in customer service leadership and project coordination. Familiar with a broad range of programming languages and interactive user interfaces. Possess  knowledge of web development process, command line, and shell scripting. Career supported by completing full stack developer program with Npower.';

const Home = () => {
  return (
    <main className="home-container">
      <section id= "home" className="home-hero home-subsection">
        <div className="subsection-content">
        <h2 className="text-4xl mb-2"> {fullName}</h2>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="subsection-paragraph">"{personalQuote}"</p>
       <div className="buttons-container">
        <NavLink to="/about" className="other-buttons">
        Learn More About Me
        </NavLink>
      </div>
        </div>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <a href="#introduction" class="read-more">Read More</a>
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>

      <section id= "introduction" className="overview home-subsection">
        <div className = "subsection-content">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <div className="buttons-container">
        <NavLink to="/contact" className="other-buttons">
        Contact Me
        </NavLink>
        </div>
        </div>
        <a href="#works" class="read-more">Read More</a>
      </section>

      <section id= "works" className="projects home-subsection">
        <div className = "subsection-content">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple projects, the projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly deescribed and includes links to code repositories that showcase my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <div className="buttons-container">
        <NavLink to="/projects" className="other-buttons">
        View Projects
        </NavLink>
        </div>
        </div>
        <a href="#home" class="read-more">Back to Top</a>
      </section>
    </main>
  )
}

export default Home