import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Eu sou o Guilherme! Estudante de Ciência da Compautação e
          desenvolvedor fullstack JavaScript.
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="" />
        <img className={styles.minhaFoto} src={minhaFoto} />
      </div>
    </div>
  );
};

export default Banner;
