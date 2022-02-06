import Head from "next/head";
import { Header } from "../components/Header";
import api from "../services/api";
import styles from "../styles/home.module.scss";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import FilterButton from "../components/FilterButton";
import Pagination from "../components/Pagination";

export default function Home() {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState();
  const [filter, setFiltering] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(
          `movie/popular?api_key=${process.env.API_KEY}&language=pt-BR&page=${page}`
        );

        const genreResponse = await api.get(
          `genre/movie/list?api_key=${process.env.API_KEY}&language=pt-BR`
        );

        const data = await response.data;
        const genre = await genreResponse.data.genres;

        setResults(data.results);
        setCategories(genre);
      } catch (error) {
        alert("Ocorreu um erro");
      }
    }
    getData();
  }, [page]);

  useEffect(() => {
    const filtering = results.filter((genreMovie) => {
      return genreMovie.genre_ids.includes(genre);
    });
    setFiltering(filtering);
  }, [genre, results]);

  return (
    <div>
      <Head>
        <title>TMDB</title>
        <meta name="description" content="Search Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className={styles.banner}>
          <div className={styles.description}>
            <h1>
              Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </h1>
            <p>Filtre por:</p>
          </div>
          <div className={styles.containerButtons}>
            {categories.map((genre) => (
              <FilterButton
                key={genre.id}
                id={genre.id}
                title={genre.name}
                onClick={() => setGenre(genre.id)}
              />
            ))}
          </div>
        </div>
        <div className={styles.container}>
          {(genre === undefined ? results : filter).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={movie.poster_path}
            />
          ))}
        </div>
        <Pagination
          previusPage={() => (page > 1 ? setPage(page - 1) : setPage(1))}
          nextPage={() => setPage(page + 1)}
        />
      </main>
    </div>
  );
}
