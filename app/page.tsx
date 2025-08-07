"use client";

import { useState } from "react";
import { Cat } from "./models/cat";
import { CatList } from "./components/cat-list";
import { CatSearchBar } from "./components/cat-search-bar";

const API = "https://cataas.com";

export const getCatByText = async (text: string) => {
  const blob = await fetch(
    text.length ? `${API}/cat/says/${text}` : `${API}/cat`
  ).then((res) => res.blob());
  const image = URL.createObjectURL(blob);
  return { caption: text, id: image, image };
};

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);

  const handleSubmit = async ({ text }: { text: string }) => {
    const cat = await getCatByText(text);
    setCats([cat, ...cats]);
  };

  return (
    <>
      <CatSearchBar onSubmit={handleSubmit} />
      <CatList cats={cats} />
    </>
  );
}
