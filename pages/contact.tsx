import styles from "../styles/pages/Contact.module.scss";

import { FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className={styles["contact-page"]}>
      <h1>
        Vous souhaitez obtenir un devis ? <br /> Discutons autour d&apos;un bon
        café.
      </h1>
      <div className={styles["contact-infos"]}>
        <a
          href="mailto:45240fernando45240@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <MdEmail size={48} />
          </span>
          <p>fernando45240@gmail.com</p>
        </a>
        <a href="tel:+33638366133" target="_blank" rel="noopener noreferrer">
          <span>
            <FaPhoneSquareAlt size={48} />
          </span>
          <p>06 38 36 61 33</p>
        </a>
        <a
          href="https://goo.gl/maps/HgfQqD17A7mSJoRe9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FaMapMarkerAlt size={48} />
          </span>
          <p>Menestreau en villette, 45240</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
