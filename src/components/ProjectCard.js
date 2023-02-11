import React from 'react';


function ProjectCard(props) {
    console.log(props)
    return (
        <div>
            <div className="card h-100" style={{width: '25rem'}} >
                <img src={props.image} className="card-img-top" style={{width: "100%", height: "35vw", objectFit: "cover"}} alt={props.name} />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;