const API = "https://cataas.com";

export const getCat = async () => {
  const blob = await fetch(`${API}/cat`).then((res) => res.blob());
  const image = URL.createObjectURL(blob);
  return { caption: "Random cat", id: image, image };
};

export const getCatByText = async (text: string) => {
  const blob = await fetch(`${API}/cat/says/${text}`).then((res) => res.blob());
  const image = URL.createObjectURL(blob);
  return { caption: `Cat matching text ${text}`, id: image, image };
};

export const getCatByTag = async (tag: string) => {
  const blob = await fetch(`${API}/cat/${tag}`).then((res) => res.blob());
  const image = URL.createObjectURL(blob);
  return { caption: `Cat matching tag "${tag}"`, id: image, image };
};

export const getCatByTagAndText = async (tag: string, text: string) => {
  const blob = await fetch(`${API}/cat/${tag}/says/${text}`).then((res) =>
    res.blob()
  );
  const image = URL.createObjectURL(blob);
  return {
    caption: `Cat matching tag "${tag}" and text "${text}"`,
    id: image,
    image,
  };
};

export const getCatTags = () =>
  fetch(`${API}/api/tags`).then((res) => res.json());
