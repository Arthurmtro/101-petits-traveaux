/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/pages/Home.module.scss";

import { IoMdHammer } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";

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

      <section className={styles.services}>
        <div>
          <h2>Nos services</h2>

          <ul className={styles["services-list"]}>
            <Link href="/">
              <li>
                <MdOutlineMapsHomeWork size={32} />
                <h3>Maconnerie</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/">
              <li>
                <MdOutlineMapsHomeWork size={32} />
                <h3>Aménagement Extérieur/Intérieur</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/">
              <li>
                <MdOutlineMapsHomeWork size={32} />
                <h3>Agrandissement</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
            <Link href="/">
              <li>
                <MdOutlineMapsHomeWork size={32} />
                <h3>Clôture</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing eLinkt.
                  <br /> Beatae facere itaque repellat autem placeat a.
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </section>

      <section className={styles.presentation}>
        <h2>Qui sommes nous ?</h2>
        <div className={styles["presentation-img"]}>
          <IoMdHammer size={32} />
        </div>
        <p>
          Vous cherchez de la main d&apos;oeuvre pour vos{" "}
          <strong>petites realisations</strong> ou vos{" "}
          <strong>chantiers de maconnerie</strong> ou{" "}
          <strong>d&apos;amenagements</strong> ? <br />
          Ne cherchez plus, l&apos;equipe de 101 petits travaux ce met a votre
          disposition pour vous aider. Nous réalisons le dallage béton et les
          élévations en parpaings, briques, pierres ou tout autre matériau selon
          vos demandes. Et pour vos aménagements extérieurs les terrasses, les
          murs de clôtures…
        </p>
      </section>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10736.801931747905!2d2.0185381!3d47.7193579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2186ad8d206abcb5!2s101%20petits%20travaux!5e0!3m2!1sfr!2sfr!4v1650820604971!5m2!1sfr!2sfr"
          width="100%"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Home;
