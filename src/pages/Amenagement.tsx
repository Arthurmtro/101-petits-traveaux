/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/pages/Amenagement.module.scss";

const Amenagement: NextPage = () => {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Head>
        <title>101 Petits Travaux | Aménagement</title>
        <meta
          name="description"
          content="101 petits Travaux Fernando Monteiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <h1>Aménagement</h1>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, transform: "translateX(0rem)" },
          hidden: { opacity: 0, transform: "translateX(-8rem)" },
        }}
        className={styles.description}
      >
        <h2>
          NOS SERVICES POUR VOS PROJETS D&apos;AMENAGEMENTS NEUVE SUR ORLEAN ET
          SES ALENTOURS
        </h2>

        <div className={styles["description-zone"]}>
          <img
            className={styles["description-img"]}
            src="/assets/imgs/maconnerie/presentation_carousel_01.webp"
            alt="101 petits travaux, maconnerie"
          />
          <p>
            Nous proposons nos services d&apos;aménagements extérieur/intérieur
            maçonnerie sur le secteur de Orléan et 30 kilomètres autour.
            <br />
            <br /> Vous recherchez une entreprise pour vous accompagner dans vos
            travaux d&apos;aménagements ?
            <br />
            <br /> Notre disponibilité et notre forte expérience sont à votre
            service pour réaliser votre projet d&apos;aménagement.
            <br />
            <br /> N&apos;hésitez plus, nous avons à cœur de vous aider !
          </p>
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
          <ul>
            <li>Tous types de dégorements</li>
            <li>Toitures</li>
            <li>Soudures Plob ou Cuivre</li>
            <li>Ouverture de porte fermée et fermeture provisoire</li>
            <li>Dépose/Repose WC</li>
          </ul>
          <img
            className={styles["description-img"]}
            src="/assets/imgs/maconnerie/presentation_carousel_02.webp"
            alt="101 petits travaux, maconnerie"
          />
        </div>
      </motion.section>

      <section className={styles.realisations}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, transform: "translateX(0rem)" },
            hidden: { opacity: 0, transform: "translateX(-8rem)" },
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
    </div>
  );
};

export default Amenagement;
