import React from "react";

function Navigation(props) {
    return (
        <div className="navbar navbar-expand{-sm|-md|-lg|-xl}">
            <nav id="main-nav" className="links">
                <ul>
                    <li className="nav-item active">
                        <a className="nav-link" href="#AboutMe" onClick={() => props.handlePageChange('AboutMe')}>About Me <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#Projects" onClick={() => props.handlePageChange('Projects')}>Projects <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#Contact" onClick={() => props.handlePageChange('Contact')}>Contact<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#Resume" onClick={() => props.handlePageChange('Resume')}>Resume<span className="sr-only"></span></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;

