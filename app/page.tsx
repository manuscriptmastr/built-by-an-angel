"use client";

import { useState } from "react";
import { Cat } from "./models/cat";
import { CatList } from "./components/cat-list";
import { CatSearchBar } from "./components/cat-search-bar";
import {
  getCat,
  getCatByTag,
  getCatByTagAndText,
  getCatByText,
} from "./api/cat";
import { cond } from "ramda";

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);

  const handleSubmit = async ({ tag, text }: { tag: string; text: string }) => {
    const cat = await cond([
      [
        (tag, text) => !!tag && !!text,
        (tag, text) => getCatByTagAndText(tag, text),
      ],
      [(tag, text) => !!tag && !text, (tag) => getCatByTag(tag)],
      [(tag, text) => !tag && !!text, (_, text) => getCatByText(text)],
      [() => true, () => getCat()],
    ])(tag, text);
    setCats([cat, ...cats]);
  };

  return (
    <>
      <CatSearchBar onSubmit={handleSubmit} />
      <CatList cats={cats} />
    </>
  );
}
