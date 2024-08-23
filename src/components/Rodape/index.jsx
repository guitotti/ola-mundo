import styles from "./Rodape.module.css";
const src = "/marca_registrada.svg";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <img src={src} />
      Desenvolvido por @guitotti.
    </footer>
  );
};

export default Rodape;
