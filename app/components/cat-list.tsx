import { Cat } from "../models/cat";
import styles from "./cat-list.module.css";

interface CatsListProps {
  cats: Cat[];
}

export const CatList: React.FC<CatsListProps> = ({ cats }) => (
  <ul className={styles.catList}>
    {cats.map(({ caption, id, image }) => (
      <li key={id} className={styles.catListItem}>
        <img src={image} alt={caption} className={styles.catListItemImage} />
      </li>
    ))}
  </ul>
);
