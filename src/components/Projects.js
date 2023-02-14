import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {

  const project = [
    {
      name: "Grrrrinder",
      image: require('../images/Grrrrinder_dogs_mainpage.jpg'),
    },
    {
      name: "Tres Tamales",
      image: require("../images/taco.png")
    },
    {
        name: "Note Taker",
        image: require("../images/note_taker.png")

      },
      {
        name: "Weather Dashboard",
        image: require("../images/weather_dashboard.png")

      },
      {
        name: "Password Generator",
        image: require("../images/password_generator.png")

      },
      {
        name: "Code Quiz",
        image: require("../images/code_quiz.png"),

      }
]

  return (
    <div className="row">
        <div className="col-sm flex-card" align="center">
        {(project.map(potato => {
          console.log(project)
            return (
                <div className="col-sm align-items-stretch" key={potato.id}>
                <ProjectCard name={potato.name} image={potato.image} description={potato.description} />
                </div>
            )
            }))}
        </div>   
    </div>   
)
}

export default Projects;