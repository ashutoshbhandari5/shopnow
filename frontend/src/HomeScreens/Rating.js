import React from "react";
import classes from "./homeScreen.module.css";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
  return (
    <>
      <div className={classes.rating}>
        <i
          className={
            value >= 1
              ? "fas fa-star"
              : value === 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            value >= 2
              ? "fas fa-star"
              : value === 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            value >= 3
              ? "fas fa-star"
              : value === 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            value >= 4
              ? "fas fa-star"
              : value === 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            value >= 5
              ? "fas fa-star"
              : value === 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <span style={{ color: "black" }}>{text && text}</span>
      </div>
    </>
  );
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rating;
