import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className = "container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Clicky Game</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link">Click an image to begin!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Score: 0 | Top Score: 0</a>
                    </li>
                    </ul>
                </div>
            </nav>
     </div>       
);

export default Nav;
