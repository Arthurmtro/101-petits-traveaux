import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>101 Petits Travaux</title>
        <meta
          name="description"
          content="101 petits Travaux Fernando Monteiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <h1>Voici du texte</h1>
      </section>

      <section className={styles.section}>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
      </section>
    </>
  );
};

export default Home;
