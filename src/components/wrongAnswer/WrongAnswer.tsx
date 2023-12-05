import React from "react";
import styles from "./style.module.css";

export default function WrongAnswer() {
  return (
    <div className={styles.wrong}>
      <p>Wrong answer</p>
    </div>
  );
}
