import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/15-mar.png" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            15.03.2024
          </span>
        </div>
        <Link href="/post-15-maret/">
          <h1>Pembukaan Acara SMARTTREN di SMA Nasional Bandung</h1>
        </Link>
        <p className={styles.desc}>Pada 15 Maret, SMA Nasional mengadakan Acara pembukaan SMARTTREN & Kedatangan Ust. Nana Gerhana  </p>
        <div className={styles.desc}/>
        <Link href="/post-15-maret/" className={styles.link}>
          Selengkapnya...
        </Link>
      </div>
    </div>
  );
};

export default Card;
