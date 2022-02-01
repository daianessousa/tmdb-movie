import styles from "./styles.module.scss";
import MovieProps from "../../types/moviesProps";
import Image from "next/image";


export default function MovieCard({title, date, poster}:MovieProps) {
  return (
    <div className={styles.container}>
      <Image
        src={`http://image.tmdb.org/t/p/original/${poster}`}
        width={200}
        height={250}
        alt="imagem"
        className={styles.poster}
      />
      <div className={styles.description}>
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
    </div>
  );
}
