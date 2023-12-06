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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success("Corect answer !", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      setIsCorrect(false);
      toast.error("Wrong answer !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <section className={styles.MainField}>
      <Container>
        <div>
          <div
            className={clsx(styles.box, {
              [styles.box__solved]: solved[current],
            })}
          >
            <div className={styles.questions__box}>
              {solved[current] && (
                <p className={styles.question__solved}>Solved</p>
              )}
              <p className={styles.number__questions}>
                {current + 1}/{data.length}
              </p>
              <p className={styles.questions}>{data[current].qestion}</p>
              <ToastContainer />
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
