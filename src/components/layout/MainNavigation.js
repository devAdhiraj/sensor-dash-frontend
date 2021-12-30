import React from "react"; 
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <figure className={classes.imgWrapper}>
          <img className={classes.logo} src="logo.svg" alt="Logo" />
        </figure>
        <span className={classes.navitem}>
          <Link className={classes.navlink} to="/admin">
            Admin Login
          </Link>
        </span>
      </div>
      <nav>
        <ul className={classes.navList}>
          <li className={classes.navitem}>
            <Link className={classes.navlink} to="/">
              Live Feed
            </Link>
          </li>
          <li className={classes.navitem}>
            <Link className={classes.navlink} to="/about">
              About Device
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
