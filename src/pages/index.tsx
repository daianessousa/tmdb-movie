import Head from "next/head";
import { Header } from "../components/Header";
import { useEffect } from "react";
import axios from "axios";
import styles from '../styles/home.module.scss'

import MovieProps from "../types/moviesProps";
import Image from "next/image";
import MovieCard from "../components/MovieCard";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Search Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <main className={styles.container}>
          {data.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={movie.poster_path}
            />
          ))}
        </main>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=c9286046717365f3a4f245487c66187e"
  );
  const data = await res.data.results;

  return { props: { data } };
}
