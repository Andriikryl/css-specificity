import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ImageArrow from "public/lines/annotation-noodle.svg";
import Image from "next/image";
import Link from "next/link";

export default function Description() {
  return (
    <section className={styles.description}>
      <Container>
        <div className={styles.description__box}>
          <h3 className={styles.description__title}>
            A selector’s specificity is calculated for a given element as
            follows:
          </h3>
          <ul role="list" className={styles.description__list}>
            <li className={styles.list__item}>
              Count the number of ID selectors in the selector (= A)
            </li>
            <li className={styles.list__item}>
              Count the number of class selectors, attributes selectors, and
              pseudo-classes in the selector (= B)
            </li>
            <li className={styles.list__item}>
              Count the number of type selectors and pseudo-elements in the
              selector (= C)
            </li>
            <li className={styles.list__item}>Ignore the universal selector</li>
          </ul>
          <p className={styles.extra__info}>
            If the selector is a selector list, this number is calculated for
            each selector in the list. For a given matching process against the
            list, the specificity in effect is that of the most specific
            selector in the list that matches.
          </p>
          <div className={styles.image__box}>
            <Image src={ImageArrow} width={24} height={80} alt="" />
          </div>
          <div className={styles.readeMore}>
            <h4 className={styles.readeMore__title}>Still have questions?</h4>
            <p className={styles.more__text}>
              read more{" "}
              <Link
                href={"https://drafts.csswg.org/selectors/#specificity-rules"}
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
