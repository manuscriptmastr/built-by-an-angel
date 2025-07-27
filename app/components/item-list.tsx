import { FC } from "react";
import { Item } from "../models/item";
import Link from "next/link";
import styles from "./item-list.module.css";
export const ItemList: FC<{ items: Item[] }> = ({ items }) => {
  return (
    <ul className={styles["item-list"]}>
      {items.map(({ id, title, price, image }) => (
        <li key={id}>
          <Link
            className={styles["item-card"]}
            href={`/items/${id}`}
            aria-labelledby={`item-list-header-${id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={styles["item-image"]}
            ></img>
            <h3 id={`item-list-header-${id}`}>{title}</h3>
            <data value={price}>{price}</data>
          </Link>
        </li>
      ))}
    </ul>
  );
};
