import styles from "../styles/components/Button.module.scss";

type ButtonType = {
  children: JSX.Element | string;
  onClick?: () => any;
};

const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
