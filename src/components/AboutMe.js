import React from 'react';
import Sam from '../images/sam-bitmoji.png';
import '../styles/App.css';

function AboutMe() {
    return (
        <div id="main-page">
            <div id="profile">
                <figure id="sam-avatar">
                    <img src={Sam} alt="Sam's Avatar"></img>
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