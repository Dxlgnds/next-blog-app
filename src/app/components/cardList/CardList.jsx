import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import Post1 from "../card/Post1";
import Post2 from "../card/Post2";

const CardList = async () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
          <Post1 />
          <Post2 />
          <Card />
      </div>
      <Pagination/>
    </div>
  );
};

export default CardList;