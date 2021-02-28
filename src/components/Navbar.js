import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navbar_wrapper">
            <Navbar color="dark" dark expand="md" className="navbar">
                <NavbarBrand className="brand" href="/">Prateek Jha</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/blogs/">Blogs</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="/about-me/">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact-me/">Contact Me</NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )

}

export default Header;