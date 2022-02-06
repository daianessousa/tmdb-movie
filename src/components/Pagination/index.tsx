import styles from "./styles.module.scss";


interface PaginationProps {
  previusPage: any;
  nextPage: any;
}

export default function Pagination({ previusPage, nextPage}: PaginationProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={previusPage}>Anterior</button>
      <button className={styles.button} onClick={nextPage}>Próxima</button>
    </div>
  );
}
