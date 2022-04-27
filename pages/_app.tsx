import type { AppProps } from "next/app";
import { CSSProperties, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavLink from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import Button from "../components/Buttons";

import styles from "../styles/layout.module.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [scrollPosition, setScrollPosition] = useState(true);
  const [desktopMedia, setDesktopMedia] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const router = useRouter();

  const handleScrool = () => {
    if (window.scrollY >= 45) {
      setScrollPosition(false);
    } else {
      setScrollPosition(true);
    }
  };

  const handleResize = () => {
    setDesktopMedia(window.matchMedia("(min-width: 800px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScrool);
    };
  });

  return (
    <main>
      <header className={styles["contact-bar"]}>
        <ul>
          <a
            href="https://goo.gl/maps/HgfQqD17A7mSJoRe9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin size={24} />
            <span>Menestreau en villette, 45240</span>
          </a>
          <a
            href="mailto:45240fernando45240@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail size={24} />
            <span>fernando45240@gmail.com</span>
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
      {desktopMedia ? (
        <header
          className={styles["nav-bar-desktop"]}
          style={
            {
              "--navbar-background-color":
                scrollPosition && router.pathname === "/"
                  ? "transparent"
                  : "var(--background-dark)",
              "--navbar-box-shadow":
                scrollPosition && router.pathname === "/"
                  ? "transparent"
                  : "0 2rem 2rem -2rem #00000061",
            } as CSSProperties
          }
        >
          <div>
            <h1>
              <NavLink href="/">LOGO</NavLink>
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
                <Button onClick={() => router.push("/contact")}>
                  Prendre contact
                </Button>
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header className={styles["nav-bar-mobile"]}>
          <div
            className={styles["nav-bar-mobile-hamburger"]}
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            {!mobileNavOpen ? (
              <AiOutlineMenu size={24} />
            ) : (
              <AiOutlineClose size={24} />
            )}
          </div>
          {mobileNavOpen && (
            <div className={styles["nav-bar-mobile-content"]}>
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
                  <Button onClick={() => router.push("/contact")}>
                    Prendre contact
                  </Button>
                </li>
              </ul>

              <h2>CONTACT EMAIL: </h2>
            </div>
          )}
        </header>
      )}

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10736.801931747905!2d2.0185381!3d47.7193579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2186ad8d206abcb5!2s101%20petits%20travaux!5e0!3m2!1sfr!2sfr!4v1650820604971!5m2!1sfr!2sfr"
          width="100%"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <footer className={styles.footer}>
        <p> © 101 petits travaux </p> <p>Tous droits réservés </p>
        <NavLink href="/mentions-legales">Mentions légales </NavLink>
        <p>
          Réalisé par
          <a
            href="https://www.mtro.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arthur Monteiro
          </a>
        </p>
      </footer>
    </main>
  );
}

export default MyApp;
