import React from "react";
import "./Box.css"; // Import CSS for styling

const Box = ({ children, background, className }) => {
  const boxClass = `box ${className || ""}`.trim(); // Concatenate classNames and trim any potential whitespace

  return (
    <div className={boxClass} style={background}>
      {children}
    </div>
  );
};

export default Box;
