"use client"
import React from "react";
import styles from "../page.module.css";

const Features = ({ bgColor, size, setBgColor, setSize }) => {
  return (
    <div className={styles.extra}>
      <h5>Background Color:</h5>
      <input
        type="color"
        value={`#${bgColor}`}
        onChange={(e) => setBgColor(e.target.value.substring(1))}
      />
      <h5>Dimension:</h5>
      <input
        type="range"
        min="200"
        max="600"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
    </div>
  );
};

export default Features;
