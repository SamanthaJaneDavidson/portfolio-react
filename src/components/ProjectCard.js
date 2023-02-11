import React from 'react';

function ProjectCard(project) {
    return (
        <div>
            <div className="card h-100" style={{width: '25rem'}} >
                <img src={project.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={project.name} />
                <div className="card-body">
                    <h4 className="card-title">{project.name}</h4>
                    <p className="card-text">{project.description}</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;