import Image from "next/image";
import Link from 'next/link';

import styles from "./styles.module.scss";
import MovieProps from "../../types/moviesProps";

export default function MovieCard({ id, title, date, poster}:MovieProps) {
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
        <Link href={`/movie/${id}`}>{title}</Link>
        <span>{date}</span>
      </div>
    </div>
  );
}
