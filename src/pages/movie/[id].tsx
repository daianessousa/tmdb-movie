import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/movie.module.scss";
import { Header } from "../../components/Header";

import api from "../../services/api";
import CastCard from "../../components/CharacterCard.tsx";
import MovieCard from "../../components/MovieCard";


export default function Movie({ data, id, credits, similar, trailer }) {
  const cast = credits.cast; 
  const crew = credits.crew;
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={`http://image.tmdb.org/t/p/original/${data.poster_path}`}
            width={400}
            height={600}
            alt="imagem"
            className={styles.image}
          />
        </div>
        <div className={styles.description}>
          <h1>{data.title}</h1>

          <div className={styles.descriptionDetails}>
            <span>16</span>
            <span>{data.release_date}</span>
            <span className={styles.genres}>
              {data.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </span>
            <span>{data.runtime}</span>
          </div>

          <p className={styles.vote}>
            {data.vote_average}
            <span>Avaliação dos Usuários</span>
          </p>
          <div className={styles.sinopse}>
            <h4>Sinopse</h4>
            <p>{data.overview}</p>
          </div>

          <div className={styles.content}>
            {cast.slice(0,2).map((actor) => (
                <p key={actor.key}>
                  {actor.name}
                  <span>{actor.known_for_department}</span>
                </p>
            ))}
            {crew.slice(0,3).map((crewE) => (
                <p key={crewE.key}>
                  {crewE.name}
                  <span>{crewE.known_for_department}</span>
                </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cast}>
        <h1 className={styles.title}>Elenco Original</h1>
        <div className={styles.characters}>
          {cast.map((character) => (
            <CastCard
              key={character.cast_id}
              image={`http://image.tmdb.org/t/p/original/${character.profile_path}`}
              name={character.name}
              character={character.character}
            />
          ))}
        </div>
      </div>
      <div className={styles.trailer}>
        <h1 className={styles.title}>Trailer</h1>
        <div className={styles.trailerContent}>
          <a href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              width={600}
              height={300}
              className={trailer.imageTrailer}
              alt={trailer.name}
            />
          </a>
        </div>
      </div>
      <div className={styles.similar}>
        <h1 className={styles.title}>Recomendações</h1>
        <div className={styles.similarMovies}>
          {similar.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={movie.poster_path}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await api.get(
    `movie/${id}?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const response = await api.get(
    `movie/${id}/credits?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const respSimiliar = await api.get(
    `movie/${id}/similar?api_key=${process.env.API_KEY}&language=pt-BR`
  );

  const respTrailer = await api.get(
    `movie/${id}/videos?api_key=${process.env.API_KEY}`
  );

  const data = await res.data;
  const credits = await response.data;
  const similarArr = await respSimiliar.data.results;
  const similar = await similarArr.slice(0, 6);
  const trailer = await respTrailer.data.results[0];
  return { props: { data, id, credits, similar, trailer } };
}
