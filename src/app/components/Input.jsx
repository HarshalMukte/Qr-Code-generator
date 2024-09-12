"use client";
import React, { useState } from "react";
import styles from "../page.module.css";

const Input = ({ handleInputChange }) => {
  const [temp, setTemp] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleInputChange(temp);
  };

  return (
    <div className={styles.input_box}>
      <div className={styles.gen}>
        <form onSubmit={handleClick}>
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter text to encode"
            value={temp}
          />
          <button type="submit" className={styles.inputBtn}>
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
