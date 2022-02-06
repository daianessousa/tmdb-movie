import styles from "./styles.module.scss";

interface Props {
  title: string;
  id: string;
  onClick?: any;
}
export default function FilterButton({ title, onClick, id }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}
