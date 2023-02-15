import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {

  const project = [
    {
      name: "Grrrrinder",
      image: require('../images/Grrrrinder_dogs_mainpage.jpg'),
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      name: "Tres Tamales",
      image: require("../images/taco.png"),
      link: "https://thaivytran.github.io/project-1/"
    },
    {
        name: "Note Taker",
        image: require("../images/note_taker.png"),
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      },
      {
        name: "Weather Dashboard",
        image: require("../images/weather_dashboard.png"),
        link: "https://samanthajanedavidson.github.io/weather-dashboard/"

      },
      {
        name: "Password Generator",
        image: require("../images/password_generator.png"),
        link: "https://samanthajanedavidson.github.io/password-generator/"

      },
      {
        name: "Code Quiz",
        image: require("../images/code_quiz.png"),
        link: "https://samanthajanedavidson.github.io/code-quiz/"

      }
]

  return (
    <div className="row">
        <div className="col-sm flex-card" align="center">
        {(project.map(potato => {
          console.log(project)
            return (
                <div className="col-sm align-items-stretch" key={potato.id}>
                <ProjectCard name={potato.name} image={potato.image} link={potato.link} />
                </div>
            )
            }))}
        </div>   
    </div>   
)
}

export default Projects;