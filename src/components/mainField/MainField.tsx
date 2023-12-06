"use client";
import React, { useEffect, useId, useState } from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import VisuallyHidden from "../visuallyhidden/VisuallyHidden";
import Prev from "../icons/Prev";
import Next from "../icons/Next";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "../data/data";

export default function MainField() {
  const [current, setCurrent] = useState(0);
  const [wId, setWId] = React.useState("0");
  const [wClass, setWClass] = React.useState("0");
  const [wType, setWType] = React.useState("0");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [solved, setSolved] = useState(new Array(data.length).fill(false));
  const id = useId();
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
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsCorrect(false);
      toast.error("Wrong answer !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const numberId = `${id}-Id-value`;
  const numberClass = `${id}-Class-value`;
  const numberType = `${id}-Type-value`;

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
                <label className={styles.label__id} htmlFor={numberId}>
                  id
                </label>
                <input
                  className={styles.input}
                  disabled={solved[current]}
                  type="number"
                  id={numberId}
                  value={wId}
                  min="0"
                  onChange={(event) => {
                    setWId(event.target.value);
                  }}
                />
              </div>
              <div className={styles.input__group}>
                <label className={styles.label__class} htmlFor={numberClass}>
                  Class
                </label>
                <input
                  className={styles.input}
                  disabled={solved[current]}
                  type="number"
                  id={numberClass}
                  min="0"
                  value={wClass}
                  onChange={(event) => {
                    setWClass(event.target.value);
                  }}
                />
              </div>
              <div className={styles.input__group}>
                <label className={styles.label__type} htmlFor={numberType}>
                  Type
                </label>
                <input
                  disabled={solved[current]}
                  className={styles.input}
                  type="number"
                  id={numberType}
                  min="0"
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
          <ToastContainer />
        </div>
      </Container>
    </section>
  );
}
