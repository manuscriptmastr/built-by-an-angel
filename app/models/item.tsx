export interface Item {
  id: number;
  price: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}
