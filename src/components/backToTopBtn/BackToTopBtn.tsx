"use client";
import React from "react";
import styles from "./style.module.css";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import TopArrow from "../icons/TopArrow";

export default function BackToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.button} onClick={scrollToTop}>
      <VisuallyHidden>back to top</VisuallyHidden>
      <TopArrow />
    </button>
  );
}
