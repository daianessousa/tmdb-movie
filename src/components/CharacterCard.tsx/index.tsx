import Image from 'next/image';
import styles from './styles.module.scss'


interface CastCardProps {
  image: string;
  name: string; 
  character: string; 
}

export default function CastCard({ image, name, character }: CastCardProps) {
  return (
    <div className={styles.container}>
      <Image
        src={`http://image.tmdb.org/t/p/original/${image}`}
        width={200}
        height={250}
        alt="imagem"
        className={styles.image}
      />
      <div>
        <h2>{name}</h2>
        <p>{character}</p>
      </div>
    </div>
  );
}
