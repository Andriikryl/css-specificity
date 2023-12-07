import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import arrowDown from "public/lines/Arrow left.svg";
import Image from "next/image";

export default function NavigateBlock() {
  return (
    <div>
      <Container>
        <div>
          <h1 className={styles.navigate__title}>
            Don&apos;t know how it works?
          </h1>
          <div className={styles.arrow__dowBox}>
            <Image src={arrowDown} width={251} height={14} alt="arrow down" />
          </div>
        </div>
      </Container>
    </div>
  );
}
