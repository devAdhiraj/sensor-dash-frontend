import React from "react"; 
import classes from "./Footer.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.author}>Project by: Adhiraj Singh</p>
      <ul className={classes.listContainer}>
        <li className={classes.navitem}>
          <a
            className={classes.navlink}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/adhiraj-singh-954b19206/"
          >
            <AiFillLinkedin className={classes.icon} />
          </a>
        </li>
        <li className={classes.navitem}>
          <a
            className={classes.navlink}
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/devAdhiraj/"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className={classes.navitem}>
          <a
            className={classes.navlink}
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:adhiraj.bal@gmail.com"
          >
            <AiFillGoogleCircle />
          </a>
        </li>
      </ul>
      <span className={classes.navitem}>
        <a className={classes.navlink} rel="noopener noreferrer"
            target="_blank" href="https://github.com/devAdhiraj/sensor-dash-frontend">
          Source Code
        </a>
      </span>
    </footer>
  );
};

export default Footer;
