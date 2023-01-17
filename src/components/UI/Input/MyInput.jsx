import React from "react";
import styles from "./MyInput.module.css"

const MyInput = (props) => {
  return (
    <div>
      <label className={styles.label} htmlFor="input">{props.label}</label>
      <input name="input" className={styles.myInput}  {...props} />
    </div>
  );
};
export default MyInput;
