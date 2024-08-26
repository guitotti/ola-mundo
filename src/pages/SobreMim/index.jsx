import PostModelo from "../../components/PostModelo";
import styles from "./SobreMim.module.css";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Oi, eu sou o Guilherme!</h3>

      <img src={fotoSobreMim} className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quas
        soluta maiores temporibus adipisci est! Error voluptatibus tempore
        officiis, in assumenda omnis quasi, veritatis, exercitationem aliquid
        provident corporis rerum dolore.
      </p>
    </PostModelo>
  );
};

export default SobreMim;
