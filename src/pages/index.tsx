import Head from "next/head";

import styles from "@/styles/Home.module.scss";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Link from "next/link";
import DownArrow from "@/assets/icons/DownArrow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kishor Shrestha</title>
        <meta name="description" content="Portfolio Website by yours tryly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.pageContainer}>
        <div className={styles.page}>
          <header>
            <Logo />
            <Socials />
          </header>
          <section className={styles.hero}>
            <h1 className={styles.title}>Kishor Shrestha</h1>
          </section>

          <footer className={styles.footer}>
            <div className={styles.linkGroup}>
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
            </div>

            <Link href="">
              <DownArrow />
            </Link>

            <div className={styles.linkGroup}>
              <Link href="/">Projects</Link>
              <Link href="/">Hire Me</Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
