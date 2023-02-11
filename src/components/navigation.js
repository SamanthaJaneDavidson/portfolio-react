import React from "react";

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
        </div>
    </nav>
    )
}

export default Navigation;
