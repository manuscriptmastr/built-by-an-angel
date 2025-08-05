"use client";

import { useState } from "react";
import styles from "./page.module.css";

const API = "https://cataas.com";

export default function ItemListPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleQueryInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestUrl = query.length ? `${API}/cat/says/${query}` : `${API}/cat`;
    const image = await fetch(requestUrl).then((res) => res.blob());
    const imageUrl = URL.createObjectURL(image);
    setResult(imageUrl);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a cat"
          className={styles["search-input"]}
          onInput={handleQueryInput}
        />
        <button type="submit" className={styles["submit-button"]}>
          Find a Cat
        </button>
      </form>
      {result && <img src={result} alt="Random cat" />}
    </>
  );
}
