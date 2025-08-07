import { useEffect, useState } from "react";
import styles from "./cat-search-bar.module.css";
import { getCatTags } from "../api/cat";

interface CatSearchBarProps {
  onSubmit: ({ tag, text }: { tag: string; text: string }) => void;
}

export const CatSearchBar: React.FC<CatSearchBarProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    getCatTags().then(setTags);
  }, []);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.currentTarget.value);
  };

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setTag(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ tag, text });
    setTag("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.catSearchBar}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={text}
        onInput={handleInput}
        className={styles.catSearchBarInput}
      />
      <select
        name="tag"
        id="tag"
        value={tag}
        onInput={handleSelect}
        className={styles.catSearchBarSelect}
      >
        {tags.map((tag) => (
          <option value={tag} key={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button type="submit" className={styles.catSearchBarButton}>
        Find a Cat
      </button>
    </form>
  );
};
