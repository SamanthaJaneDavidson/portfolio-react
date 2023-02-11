import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer className="fixed-bottom bg-dark text-center text-white">
                <div className="container p-4">
                    <section class="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/Throwingicicles/" role="button"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer;



{/* <div className="fixed-bottom">
            <footer className=" footer bg-light text-center">
                <ul>
                    <li className="nav-item active">
                        <a target="_blank" href="mailto:samanthajanedavidson@gmail.com">Email</a>
                    </li>
                    <li className="nav-item active">
                        <a target="_blank" href="https://github.com/SamanthaJaneDavidson">Github</a>
                    </li>
                    <li className="nav-item active">
                        <a target="_blank" href="https://www.linkedin.com/in/samantha-davidson-b0510878/">LinkedIn</a>
                    </li>
                </ul>
            </footer>
        </div> */}