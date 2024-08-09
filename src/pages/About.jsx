import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/pic1.jpeg';

// Replace these variables with your information
const firstName = 'Aba';
const jobTitle = 'Full Stack Developer';
const company = 'Npower';
const mainDuty = 'Trainee';
const jobLocation = 'Remote Dallas, TX';
const briefJobDescription = 'Completed an intensive 20-week Full Stack Developer training program, gaining hands-on experience in both front-end and back-end development technologies, including HTML, CSS, and JavaScript. Developed proficiency in building responsive and interactive user interfaces using popular front-end frameworks such as React.js, ensuring a seamless user experience across various devices. Acquired essential back-end development skills through practical training in server-side scripting with Node.js, utilizing Express.js for efficient routing and building scalable web applications. Demonstrated the ability to work with databases by mastering fundamental database management concepts and hands-on experience with MongoDB, ensuring effective storage and retrieval of data. Collaborated with peers on real-world projects, applying Agile development methodologies, version control using Git, and participating in regular code reviews, fostering a collaborative environment.';
const careerObjective = 'Ive spent over 5 years as a business professional, focusing on how to blend business strategies with best world class operational process to enhance performance and keep customers happy. Ive worn many hats, from founding and leading Opoku advisors to managing teams and coordinating projects at companies like SVI, Chewy, and Jones Lang Lasalle. My leadership journey has mainly been in the healthcare space, where I was always drawn to using the technological aspects to improve operational performance. What gets me excited is finding innovative ways to solve problems, improve processes, working with teams, diving into data to drive decisions, and insuring projects run smoothly from start to finish. I am currently a software developer trainee in a program with Npower and I plan to utilize the experience along with a scrum master certification to enhance my skills ultimately to lay down the foundation to be a part of harnessing the continued evolution of technology.';
const personalLife = 'I am a dedicated and passionate business professional now venturing into the exciting world of technology. I thrive on continuous learning and enjoy the challenge of using the technological aspects to improve operational performance. Outside of my professional pursuits, I love spending time with my family, exploring new places through travel, and enjoy my hobbies of singing and watching anime. I value personal growth, meaningful connections, and making a positive impact in both my personal and professional life.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="Aba Opokus Linkedin image of self" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;