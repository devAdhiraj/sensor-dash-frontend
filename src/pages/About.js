import React from "react"; 
import classes from "./About.module.css";

const About = () => {
  return (
  <article className={classes.main}>
  <h1>About Device</h1>
  <p className={classes.body}>
    The device uses the onboard sensors to get information about temperature, humidity and light
    in its environment. The ESP8266 connected to the Arduino then makes an API call to store this information in 
    a mongoDB database. How exactly the ESP8266 makes an API call is explained in more detail  
    {" "}<a href="https://devAdhiraj.github.io/compengproject/about" target="_blank" rel="noopener noreferrer">here</a>.
    The frontend react application can then fetch data from the mongoDB database and display it to the user.
    This device can be used to track temperature, humidity and light data in a separate location, as all the data is available for the user through the frontend application. 
  </p>
  <div className={classes.imagesWrapper}>

  <figure>
    <img className={classes.images} src="topview.jpg" alt="device pic" />
  </figure>
  <figure>
    <img className={classes.images} src="3dview.jpg" alt="device pic" />
  </figure>
  <figure>
    <img className={classes.images} src="wiringview.jpg" alt="wiring pic" />
  </figure>
  <figure>
    <img className={classes.images} src="wiringview2.jpg" alt="wiring pic" />
  </figure>
  </div>
    </article>
  
  );
};
export default About;
