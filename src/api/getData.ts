import { Article } from '../helpers/types';

export async function getData(): Promise<Article[]> {
  try {
    const response = await fetch(
      'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=fb6ef00c29fbdfbd5cb3daf99a130b74',
      {
        method: 'GET',
      }
    );
    const result = await response.json();
    return result.articles;
  } catch (e) {
    console.warn(e);
    return [];
  }
}
