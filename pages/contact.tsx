import styles from "../styles/pages/Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles["contact-page"]}>
      <h1>Discuttons autour d&apos;un bon caffé.</h1>
      <div className={styles["contact-infos"]}>
        <article>
          <span>ICON</span>
          <h3>email</h3>
          <p>dawuhduiaw@dawdjawiod.dwad</p>
        </article>
        <article>
          <span>ICON</span>
          <h3>Telephone</h3>
          <p>dawuhduiaw@dawdjawiod.dwad</p>
        </article>
        <article>
          <span>ICON</span>
          <h3>Adresse</h3>
          <p>dawuhduiaw@dawdjawiod.dwad</p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
