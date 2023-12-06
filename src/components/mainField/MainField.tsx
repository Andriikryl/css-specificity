"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Prev from "../icons/Prev";
import Next from "../icons/Next";
import clsx from "clsx";
import CorectAnswer from "../corectAnswer/CorectAnswer";
import WrongAnswer from "../wrongAnswer/WrongAnswer";

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
  const [solved, setSolved] = useState(new Array(data.length).fill(false));
  useEffect(() => {
    setIsCorrect(null);
  }, [current]);
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
      setSolved(solved.map((item, index) => (index === current ? true : item)));
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section className={styles.MainField}>
      <Container>
        <div>
          <div
            className={clsx(styles.answer__box, {
              [styles.show]: isCorrect === true || isCorrect === false,
            })}
          >
            {isCorrect === true ? (
              <CorectAnswer />
            ) : isCorrect === false ? (
              <WrongAnswer />
            ) : (
              ""
            )}
          </div>
          <div className={styles.box}>
            <div className={styles.questions__box}>
              {solved[current] && (
                <p className={styles.question__solved}>Solved</p>
              )}
              <p className={styles.number__questions}>
                {current + 1}/{data.length}
              </p>
              <p className={styles.questions}>{data[current].qestion}</p>
            </div>
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
                  disabled={solved[current]}
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
                  disabled={solved[current]}
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
                  disabled={solved[current]}
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
            <button
              className={styles.form__button}
              type="submit"
              disabled={solved[current]}
            >
              Subimt
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
