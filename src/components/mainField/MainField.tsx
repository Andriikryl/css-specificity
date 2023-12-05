"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Prev from "../icons/Prev";
import Next from "../icons/Next";
import clsx from "clsx";

const data = [
  {
    id: "1",
    qestion: "#myId",
    inputId: 1,
    inputClass: 0,
    inputType: 0,
  },
  {
    id: "2",
    qestion: '[type="password"]',
    inputId: 0,
    inputClass: 1,
    inputType: 0,
  },
];

export default function MainField() {
  const [current, setCurrent] = useState(0);
  const [wId, setWId] = React.useState("0");
  const [wClass, setWClass] = React.useState("0");
  const [wType, setWType] = React.useState("0");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      parseInt(wId) === data[current].inputId &&
      parseInt(wClass) === data[current].inputClass &&
      parseInt(wType) === data[current].inputType
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section>
      <Container>
        <div>
          <div className={styles.questions__box}>
            <p className={styles.questions}>{data[current].qestion}</p>
          </div>
          <div className={styles.questions__controls}>
            <button
              className={clsx(styles.control__button, styles.prev)}
              onClick={prevSlide}
            >
              <VisuallyHidden>previus</VisuallyHidden>
              <Prev />
            </button>
            <button
              className={clsx(styles.control__button, styles.next)}
              onClick={nextSlide}
            >
              <VisuallyHidden>next</VisuallyHidden>
              <Next />
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input__wrapper}>
              <div className={styles.input__group}>
                <label className={styles.label__id} htmlFor="name-field">
                  id
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="name-field"
                  value={wId}
                  onChange={(event) => {
                    setWId(event.target.value);
                  }}
                />
              </div>
              <div className={styles.input__group}>
                <label className={styles.label__class} htmlFor="name-field">
                  Class
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="name-field"
                  value={wClass}
                  onChange={(event) => {
                    setWClass(event.target.value);
                  }}
                />
              </div>
              <div className={styles.input__group}>
                <label className={styles.label__type} htmlFor="name-field">
                  Type
                </label>
                <input
                  className={styles.input}
                  type="number"
                  id="name-field"
                  value={wType}
                  onChange={(event) => {
                    setWType(event.target.value);
                  }}
                />
              </div>
            </div>
            <button className={styles.form__button} type="submit">
              Subimt
            </button>
          </form>
          <p>
            {isCorrect === true
              ? "Correct answer!"
              : isCorrect === false
              ? "Wrong answer."
              : ""}
          </p>
        </div>
      </Container>
    </section>
  );
}
