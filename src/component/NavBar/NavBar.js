import React from 'react';
import "./NavBar.scss";
export default function NavBar() {
    return ( 
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        tours
                    </a>
                </li>
            </ul>

    </nav>
    )
}