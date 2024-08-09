import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Weather App',
    description: 'Developed a React-based weather application that integrates with the OpenWeatherAPI to provide real-time weather updates. This project involved building a dynamic UI using React components, js, and props, and implementing event handling, form management, and API calls. The application allows users to input a location and view the current weather conditions for that location.',
    repositoryLink: 'https://github.com/abopoku/weather-application2.0',
  },
  {
    title: 'DangoDot Anime App',
    description: 'Collaborated on a capstone project to develop an Anime TV Show Database application with integrated movie features, similar to Crunchyroll. Worked alongside a team to utilize React, Express, and MongoDB to create a robust and user-friendly platform. Employed Git and GitHub for version control and team collaboration.',
    repositoryLink: 'https://github.com/abopoku/DangoDot_2.0',
  },

];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects