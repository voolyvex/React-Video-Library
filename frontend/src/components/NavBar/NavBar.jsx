import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>React Video Library</b>
          </Link>
        </li>
        <Link to='/' style={{ textDecoration: "none", color: "white" }}>
          <li className="navlinks">Home</li>
        </Link>
        <Link to='/search' style={{ textDecoration: "none", color: "white" }}>
          <li className="navlinks">Search</li>
        </Link>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
