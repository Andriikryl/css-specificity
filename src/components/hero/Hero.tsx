import React from "react";
import style from "./style.module.css";
import MenImage from "public/face/face.svg";
import WemanImage from "public/face/fave-wemen.svg";
import arrowDown from "public/lines/Arrow left.svg";
import Image from "next/image";
import { Container } from "../container/Container";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className={style.hero}>
          <div className={style.title__box}>
            <h1 className={style.hero__title}>
              Calculating a selector’s specificity
            </h1>
          </div>
          <div className={style.qa__box}>
            <div className={style.flex__group}>
              <Image src={MenImage} width={54} height={54} alt="men" />
              <div className={style.info__bloc}>
                <p>Do you understend specificity?</p>
              </div>
            </div>
            <div className={style.flex__group}>
              <div className={style.info__bloc}>
                <p>Yes! ...... meybe?</p>
              </div>
              <div className={style.image__boxWem}>
                <Image src={WemanImage} width={54} height={54} alt="men" />
              </div>
            </div>
          </div>
          <div className={style.arrow__dowBox}>
            <Image src={arrowDown} width={251} height={14} alt="arrow down" />
          </div>
        </div>
      </Container>
    </section>
  );
}
