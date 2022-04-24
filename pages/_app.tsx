import { CSSProperties, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavLink from "next/link";

import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import styles from "../styles/layout.module.scss";
import "../styles/globals.scss";
import Button from "../components/Buttons";

function MyApp({ Component, pageProps }: AppProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const router = useRouter();

  const handleScrool = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrool);

    return () => {
      document.removeEventListener("scroll", handleScrool);
    };
  });

  return (
    <>
      <>
        <header className={styles["contact-bar"]}>
          <ul>
            <a href="">
              <FiMapPin size={24} />
              <span>Menestreau en villette, 45240</span>
            </a>
            <a href="mailto:45240fernando45240@gmail.com">
              <IoMdMail size={24} />
              <span>45240fernando45240@gmail.com</span>
            </a>
            <a
              href="https://www.facebook.com/101-petits-travaux-106890404769940/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={24} />
            </a>
          </ul>
        </header>
        <header
          className={styles["nav-bar"]}
          style={
            {
              "--background-color":
                scrollPosition <= 45 && router.pathname === "/"
                  ? "transparent"
                  : "var(--background-dark)",
              "--box-shadow":
                scrollPosition <= 45 && router.pathname === "/"
                  ? "transparent"
                  : "0 0 2rem #00000061",
            } as CSSProperties
          }
        >
          <div>
            <h1>
              <NavLink href="/">101 Petits Travaux</NavLink>
            </h1>
            <ul>
              <li>
                <NavLink href="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink href="/">Maçonnerie</NavLink>
              </li>
              <li>
                <NavLink href="/">Aménagements</NavLink>
              </li>
              <li>
                <Button onClick={() => router.push("/")}>
                  Prendre contact
                </Button>
              </li>
            </ul>
          </div>
        </header>
      </>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        © 101 petits travaux | Tous droits réservés | Réalisé par
        <a href="https://www.mtro.fr" target="_blank" rel="noopener noreferrer">
          Arthur Monteiro
        </a>
        |<NavLink href="/mentions-legales">Mentions légales</NavLink>
      </footer>
    </>
  );
}

export default MyApp;
