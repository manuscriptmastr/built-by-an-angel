"use client";

import { Item } from "@/app/models/item";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

export default function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | undefined>();
  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => res.json())
      .then(setItem);
  }, []);

  return (
    <>
      {item && (
        <article className={styles["item-detail"]}>
          <h1 className={styles.header}>{item.title}</h1>
          <img src={item.image.src} alt={item.image.alt} />
          <p>{item.description}</p>
          <button className={styles["item-button"]}>
            Add to cart — {item.price}
          </button>
        </article>
      )}
    </>
  );
}
