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
