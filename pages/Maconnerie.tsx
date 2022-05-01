/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/pages/Maconnerie.module.scss";

const Maconnerie: NextPage = () => {
  return (
    <>
      <Head>
        <title>101 Petits Travaux | Maçonnerie</title>
        <meta
          name="description"
          content="101 petits Travaux Fernando Monteiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <h1>Maçonnerie</h1>
      </section>

      <section className={styles.services}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, transform: "translateX(0rem)" },
            hidden: { opacity: 0, transform: "translateX(10rem)" },
          }}
        >
          <h2>Nos services</h2>
        </motion.div>
      </section>
    </>
  );
};

export default Maconnerie;
