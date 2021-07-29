import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav  className="navbar navbar-expand-lg navbar-light bg-light nav">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"> <span className="anch">TechGuySaksham</span></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active_main" className="nav-link" aria-current="page" to="/"><span className="anch">Home</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active_main" className="nav-link" to="/services"><span className="anch">Services</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active_main" className="nav-link" to="/contact"><span className="anch">Contact Us</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeClassName="active_main" className="nav-link" to="/about"><span className="anch">About Us</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;