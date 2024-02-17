"use client"

import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <Link href="/anggota" className={styles.link}>Anggota</Link>

    <div className={styles.burger} onClick={() =>setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Home</Link>
        <Link href="/tentang">Tentang</Link>
        <Link href="/kontak">Kontak</Link>
        <Link href="/anggota">Anggota</Link>
      </div>
    )}
    </>
  );
};

export default AuthLinks