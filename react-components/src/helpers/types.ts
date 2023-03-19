export type Article = {
  description: string;
  content: string;
  publishedAt: string;
  source: {
    url: string;
    name: string;
  };
  title: string;
  image: string;
};
