"use client";

import { useState } from "react";
import styles from "./page.module.css";

const API = "https://cataas.com";

export default function ItemListPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleQueryInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestUrl = query.length ? `${API}/cat/says/${query}` : `${API}/cat`;
    const image = await fetch(requestUrl).then((res) => res.blob());
    const imageUrl = URL.createObjectURL(image);
    setResults([imageUrl, ...results]);
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
      {results.map((result) => (
        <img key={result} src={result} alt="Random cat" />
      ))}
    </>
  );
}
