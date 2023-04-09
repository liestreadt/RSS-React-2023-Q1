export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

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

export type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  country: string;
  checkbox: string[];
  personalData: string;
  radio: string;
  image?: FileList;
};

export enum LocationNames {
  Main = 'Main',
  About = 'About',
  Forms = 'Forms',
  NotFound = 'Page not found',
}
