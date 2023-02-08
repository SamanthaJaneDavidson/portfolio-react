import React from "react";
import Portfolio from "./Portfolio";
import Navigation from "./Navigation";
import Header from "./Header";

function Project() {
    return (
        <main className="main-page">
            <section className="projects">
                <a target="_blank" href="https://thaivytran.github.io/project-1/"><img src="./taco.png" alt="Tres Tamales"></img></a>
                <a target="_blank" href="https://floating-reef-00120.herokuapp.com/"><img src="./Grrrrinder_dogs_mainpage.jpg" alt="Grrrr'inder"></img></a>
            </section>
        </main>
    );
}

export default Project;
