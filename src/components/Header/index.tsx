import Image from "next/image";
import logo from '../../../public/images/logo.svg'
import FilterButton from "./FilterButton";
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.logoContent}>
          <Image src={logo} />
        </div>
        <div className={styles.content}>
          <div>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
            <p>Filtre por:</p>
          </div>
          <div className={styles.containerButtons}>
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
            <FilterButton />
          </div>
        </div>
      </header>
    </>
  );
};
