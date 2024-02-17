import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <div>
        <Featured/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
