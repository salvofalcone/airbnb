import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>
        © 2023{" "}
        <a href="https://www.linkedin.com/in/salvofalcone/">Salvo Falcone</a>
      </p>
    </div>
  );
};

export default Footer;
