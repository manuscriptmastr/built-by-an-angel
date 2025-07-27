"use client";

import { Item } from "@/app/models/item";
import { useEffect, useState } from "react";
import { ItemList } from "../components/item-list";
import styles from "./page.module.css";

export default function ItemListPage() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <>
      <h1 className={styles.header}>Welcome to Ga-linda's Closet!</h1>
      <div className={styles["item-list"]}>
        <ItemList items={items} />
      </div>
    </>
  );
}
