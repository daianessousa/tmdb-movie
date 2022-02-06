import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/images/logo.svg'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <>
      <header className={styles.container}>
          <Link href={"/"} passHref>
            <Image src={logo} alt="TMDB" />
          </Link>
          
      </header>
    </>
  );
};
