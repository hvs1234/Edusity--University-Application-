// import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.clear();
      navigate("/login");
      window.location.reload();
    } else {
      return;
    }
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a className="navlink" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navlink" href="#program">
              Program
            </a>
          </li>
          <li>
            <a className="navlink" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navlink" href="#campus">
              Campus
            </a>
          </li>
          <li>
            <a className="navlink" href="#contact">
              Contact
            </a>
          </li>
          <li>
            {auth ? (
              <Link onClick={logout} className="navlink" to={"/login"}>
                Logout
              </Link>
            ) : (
              <>
                <li>
                  <Link className="navlink" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/signup"} className="navlink">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
