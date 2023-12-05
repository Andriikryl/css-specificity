"use client";
import React, { useState } from "react";
import style from "./style.module.css";

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

export default function Content() {
  const [current, setCurrent] = useState(0);
  const [wId, setWId] = React.useState("");
  const [wClass, setWClass] = React.useState("");
  const [wType, setWType] = React.useState("");
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
      <div>
        <h1>css specificity</h1>
        <div>
          <p>{data[current].qestion}</p>
        </div>
        <div>
          <button onClick={prevSlide}>prev</button>
          <button onClick={nextSlide}>next</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name-field">id:</label>
            <input
              type="number"
              id="name-field"
              value={wId}
              onChange={(event) => {
                setWId(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="name-field">Class:</label>
            <input
              type="number"
              id="name-field"
              value={wClass}
              onChange={(event) => {
                setWClass(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="name-field">Type:</label>
            <input
              type="number"
              id="name-field"
              value={wType}
              onChange={(event) => {
                setWType(event.target.value);
              }}
            />
          </div>
          <button>subimt</button>
        </form>
        <p>
          {isCorrect === true
            ? "Correct answer!"
            : isCorrect === false
            ? "Wrong answer."
            : ""}
        </p>
      </div>
    </section>
  );
}
