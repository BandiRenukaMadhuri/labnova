
import React from 'react';
import{ Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                        <img src="src/assets/logo.png" alt="Labnova Logo" className="logo-img" />
                </div>
                <div className="navbar">
                    <ul className="nav-items">
                        <Link to="/"><li>Home</li></Link>
                        {/* <li><link>About Us</link></li>
                        <li className="dropdown">
                            <link to ="/" className="dropbtn">Products ▼</link>
                            <ul className="dropdown-menu">
                                <li><a href="#">Electrolyte Analyzer</a></li>
                                <li><a href="#">Glucose</a></li>
                                <li><a href="#">Labchem 7plus</a></li>
                                <li><a href="#">Labcount 3</a></li>
                                <li><a href="#">Labcount 5</a></li>
                                <li><a href="#">Hemoglobin</a></li>
                                <li><a href="#">Clinical Chemistry Analyzer</a></li>
                                <li><a href="#">Proflow Box Dengue NS1</a></li>
                            </ul>
                        </li>
                        <li><link>Blog</link></li>
                        <li><link to="/">Careers</link></li> */}
                        <Link to="/contact" ><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;

