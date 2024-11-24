


import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/about"><li>About Us</li></Link>
                        <li className="dropdown">
                            <Link to="/products" className="dropbtn">Products ▼</Link>
                            <ul className="dropdown-menu">
                                <Link to="/product/electrolyte-analyzer"><li>Electrolyte Analyzer</li></Link>
                                <Link to="/product/glucose"><li>Glucose</li></Link>
                                <Link to="/product/labchem-7plus"><li>Labchem 7plus</li></Link>
                                <Link to="/product/labcount-3"><li>Labcount 3</li></Link>
                                <Link to="/product/labcount-5"><li>Labcount 5</li></Link>
                                <Link to="/product/hemoglobin"><li>Hemoglobin</li></Link>
                                <Link to="/product/clinical-chemistry-analyzer"><li>Clinical Chemistry Analyzer</li></Link>
                                <Link to="/product/proflow-box-dengue-ns1"><li>Proflow Box Dengue NS1</li></Link>
                            </ul>
                        </li>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/careers"><li>Careers</li></Link>
                        <Link to="/contact"><li>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
