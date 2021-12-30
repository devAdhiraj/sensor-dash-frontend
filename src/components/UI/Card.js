import React from "react"; 
import classes from "./Card.module.css";
const Card = ({ children, className }) => {
  return (
    <section
      className={className ? classes.card + " " + className : classes.card}
    >
      {children}
    </section>
  );
};

export default Card;
