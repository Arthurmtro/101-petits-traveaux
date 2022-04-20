import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>101 Petits Traveaux</title>
        <meta
          name="description"
          content="101 petits traveaux, Fernando Monteiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}></section>
    </>
  );
};

export default Home;
