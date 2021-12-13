import React from "react";
import "../App.css";

const Footer = () => {
  const year = new Date();

  return (
    <div className="footer">
      <h6>With love from umoja hackathon | {year.getFullYear()} </h6>
    </div>
  );
};

export default Footer;
