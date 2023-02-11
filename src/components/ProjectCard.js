import React from 'react';


function ProjectCard(prop) {
    console.log(prop)
    return (
        <div>
            <div className="card h-100" style={{width: '25rem'}} >
                <img src={prop.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={prop.name} />
                <div className="card-body">
                    <h4 className="card-title">{prop.name}</h4>
                    <p className="card-text">{prop.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;