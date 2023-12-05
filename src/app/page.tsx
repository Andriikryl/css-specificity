import Image from "next/image";
import styles from "./page.module.css";
import { Content } from "next/font/google";
import MainField from "@/components/mainField/MainField";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <MainField />
    </>
  );
}
