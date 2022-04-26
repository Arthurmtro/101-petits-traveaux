/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/pages/Home.module.scss";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { GiBrickWall, GiStairs } from "react-icons/gi";
import { IoMdHammer } from "react-icons/io";
import { BsNodePlus, BsTranslate } from "react-icons/bs";

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
        <h1>101 Petits Travaux</h1>
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

          <ul className={styles["services-list"]}>
            <Link href="/" passHref>
              <li>
                <MdOutlineMapsHomeWork size={32} />
                <h3>Maconnerie</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/" passHref>
              <li>
                <GiStairs size={32} />
                <h3>Aménagement Extérieur/Intérieur</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/" passHref>
              <li>
                <BsNodePlus size={32} />
                <h3>Agrandissement</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/" passHref>
              <li>
                <GiBrickWall size={32} />
                <h3>Clôture</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
          </ul>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, transform: "translateX(0rem)" },
          hidden: { opacity: 0, transform: "translateX(-10rem)" },
        }}
        className={styles.presentation}
      >
        <h2>Qui sommes nous ?</h2>
        <div className={styles["presentation-img"]}>
          <IoMdHammer size={32} />
        </div>

        <div className={styles["presentation-zone"]}>
          <p>
            Vous cherchez de la main d&apos;oeuvre pour vos{" "}
            <strong>petites realisations</strong> ou vos{" "}
            <strong>chantiers de maconnerie</strong> ou{" "}
            <strong>d&apos;amenagements</strong> ? <br />
            <br />
            Ne cherchez plus, l&apos;equipe de{" "}
            <strong>101 petits travaux</strong> ce met a votre disposition pour
            vous aider.
            <br />
            <br />
            Nous réalisons le dallage béton et les élévations en parpaings,
            briques, pierres ou tout autre matériau selon vos demandes. <br />
            <br />
            Nous sommes aussi presents pour vos aménagements extérieurs ou
            intérieurs, vos réalisations de terrasses de murs et de clôtures…
          </p>

          <iframe
            src="https://giphy.com/embed/tAeB6dptxnoli" //3o7abDnUPDkOC05QU8 IS FUN !
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
