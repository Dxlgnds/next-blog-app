"use client";

import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
      >
        Artikel Lainnya
      </button>
    </div>
  );
};

export default Pagination;