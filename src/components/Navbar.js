import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-content-between n-padding align-items-center">
            <div ><Link to="/">Prateek Jha</Link></div>
            <div>
                <ul>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about-me">About Me</Link></li>
                    <li><Link to="/contact-me">Contact Me</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;