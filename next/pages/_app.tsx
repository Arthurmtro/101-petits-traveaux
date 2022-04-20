import type { AppProps } from "next/app";
import NavLink from "next/Link";

import styles from "../styles/layout.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className={styles.navbar}>
        <section className={styles["contact-nav"]}>
          <ul>
            <a href="">Menestreau en villette, 45240</a>
            <a href="mailto:45240fernando45240@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect width="24" height="24" fill="transparent" />
                <path
                  d="M14,1H2A2,2,0,0,0,0,3v.4L8,7.9l8-4.4V3A2,2,0,0,0,14,1Z"
                  fill="#ffffff"
                />
                <path
                  d="M7.5,9.9,0,5.7V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V5.7L8.5,9.9A1.243,1.243,0,0,1,7.5,9.9Z"
                  fill="#ffffff"
                />
              </svg>
              <span>45240fernando45240@gmail.com</span>
            </a>
          </ul>
          <a
            href="https://www.facebook.com/101-petits-travaux-106890404769940/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="132"
              height="24"
              viewBox="0 0 132 24"
            >
              <rect width="24" height="24" fill="transparent" />
              <path
                d="M6.023,16,6,9H3V6H6V4c0-2.7,1.672-4,4.079-4a22.346,22.346,0,0,1,2.434.124V2.945h-1.67c-1.31,0-1.563.622-1.563,1.535V6H13L12,9H9.28v7Z"
                fill="#201de9"
              />
            </svg>
          </a>
        </section>
        <section>
          <h1>LOGO</h1>
          <ul>
            <li>
              <NavLink href="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink href="/galerie">Galerie</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </section>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a href="https://www.mtro.fr" target="_blank" rel="noopener noreferrer">
          Powered by <span className={styles.logo}>Arthur Monteiro</span>
        </a>
      </footer>
    </>
  );
}

export default MyApp;
