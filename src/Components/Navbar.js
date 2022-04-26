import { NavLink } from "react-router-dom";

import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        NewsMonkey
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link "
                                    aria-current="page"
                                    to="/"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/business"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Business
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/entertainment"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Entertainment
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/health"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Health
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/science"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Science
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/sports"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Sports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/technology"
                                    exact
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}>
                                    Technology
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
