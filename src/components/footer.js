import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer className="fixed-bottom bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://www.facebook.com/Throwingicicles/" role="button"><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target="blank" href="mailto:samanthajanedavidson@gmail.com" role="button"><i className="bi bi-google"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://www.linkedin.com/in/samantha-davidson-b0510878/" role="button"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" target="blank" href="https://github.com/SamanthaJaneDavidson" role="button"><i className="bi bi-github"></i></a>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
