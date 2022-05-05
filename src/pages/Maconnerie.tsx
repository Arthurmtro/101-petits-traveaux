/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, transform: "translateX(0rem)" },
          hidden: { opacity: 0, transform: "translateX(-10rem)" },
        }}
        className={styles.description}
      >
        <h2>
          NOS SERVICES POUR VOS PROJETS DE MAÇONNERIE NEUVE SUR ORLEAN ET SES
          ALENTOURS
        </h2>

        <div className={styles["description-zone"]}>
          <p>
            Nous proposons nos services de maçonnerie sur le secteur de Orléan
            et 30 kilomètres autour.
            <br />
            <br /> Vous recherchez une entreprise pour vous accompagner dans la
            construction de votre maison ?<br />
            <br /> C&apos;est en effet une étape importante et c&apos;est pour
            cela que nous avons à cœur de vous conseiller, de vous proposer des
            solutions en accord avec vos envies et vos besoins.
            <br />
            <br /> Notre disponibilité et notre forte expérience sont à votre
            service pour réaliser votre projet de construction.
            <br />
            <br /> N&apos;hésitez plus, nous avons à cœur de créer la maison que
            vous avez imaginée, celle qui vous ressemble et qui nous rassemble !
          </p>

          <img
            className={styles["description-img"]}
            src="/assets/imgs/maconnerie/presentation_carousel_01.webp"
            alt="101 petits travaux, maconnerie"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, transform: "translateX(0rem)" },
          hidden: { opacity: 0, transform: "translateX(+10rem)" },
        }}
        className={styles.description}
      >
        <div className={styles["description-zone"]}>
          <img
            className={styles["description-img"]}
            src="/assets/imgs/maconnerie/presentation_carousel_02.webp"
            alt="101 petits travaux, maconnerie"
          />
          <ul>
            <li>Construction de maisons neuves sur plans</li>
            <li>Construction de maison sur mesure</li>
            <li>
              Constructions de style contemporaines, modernes ou traditionnelles
            </li>
            <li>
              Création d&apos;aménagements extérieurs (terrasses, murs de
              clôtures)
            </li>
            <li>Création d&apos;ouvertures…</li>
          </ul>
        </div>
      </motion.section>

      <section className={styles.realisations}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, transform: "translateX(0rem)" },
            hidden: { opacity: 0, transform: "translateX(-10rem)" },
          }}
        >
          <h2>NOS RÉALISATIONS</h2>
          <span>Voici quelques unes de nos réalisations</span>

          <ul className={styles["realisations-list"]}>
            <Carousel className={styles["carousel"]} infiniteLoop>
              <div>
                <img
                  src="/assets/imgs/maconnerie/presentation_carousel_00.webp"
                  alt="101 petits travaux, maconnerie"
                />
              </div>
              <div>
                <img
                  src="/assets/imgs/maconnerie/presentation_carousel_01.webp"
                  alt="101 petits travaux, maconnerie"
                />
              </div>
              <div>
                <img
                  src="/assets/imgs/maconnerie/presentation_carousel_02.webp"
                  alt="101 petits travaux, maconnerie"
                />
              </div>
            </Carousel>
          </ul>
        </motion.div>
      </section>
    </>
  );
};

export default Maconnerie;
