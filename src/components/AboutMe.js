import React from 'react';
import avatar from './images/sam-bitmoji.png';
import '../public/styles/App.css';

function AboutMe() {
    return (
        <div id="main-page">
            <div id="profile">
                <figure id="sam-avatar">
                    <img src="./images/sam-bitmoji.png" alt="Sam's Avatar"></img>
                </figure>

                <section id="sam-info">
                    <ul>
                        <li>Developer</li>
                        <li>Project Manager</li>
                        <li>Archaeologist</li>
                        <li>Board Game Enthusiast</li>
                    </ul>
                </section>
            </div>
        </div>

    )
}

export default AboutMe;