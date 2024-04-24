import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className={styles.mbl}>
        <Image src="/header.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.up}>
        <Featured/>
      </div>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
