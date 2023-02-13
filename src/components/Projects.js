import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {

  const project = [
    {
      name: "Grrrrinder",
      image: "./images/Grrrrinder_dogs_mainpage.jpg",
      description: "Add description."
    },
    {
      name: "Tres Tamales",
      image: "./images/taco.png",
      description: "Add description."
    },
    {
        name: "Note Taker",
        image: "./images/note_taker.png",
        description: "Add description."
      },
      {
        name: "Weather Dashboard",
        image: "./images/weather_dashboard.png",
        description: "Add description."
      },
      {
        name: "Password Generator",
        image: "./images/password_generator.png",
        description: "Add description."
      },
      {
        name: "Code Quiz",
        image: "./images/code_quiz.png",
        description: "Add description."
      }
]

  return (
    <div className="row">
        <div className="col-sm" align="center">
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