import { useState } from "react";
import styles from "./cat-search-bar.module.css";

interface CatSearchBarProps {
  onSubmit: ({ text }: { text: string }) => void;
}

export const CatSearchBar: React.FC<CatSearchBarProps> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState("");

  const handleUpdateSearch = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ text: searchText });
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.catSearchBar}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={searchText}
        onInput={handleUpdateSearch}
        className={styles.catSearchBarInput}
      />
      <select name="tag" id="tag" className={styles.catSearchBarSelect}>
        <option>Option 1</option>
      </select>
      <button type="submit" className={styles.catSearchBarButton}>
        Find a Cat
      </button>
    </form>
  );
};
