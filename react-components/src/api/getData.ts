import { Article } from '../helpers/types';

export async function getData(): Promise<Article[]> {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=06747a597f8645b1a97895579d8c39e1',
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error('Error while fetching data');
    }
    const result = await response.json();
    return result.articles;
  } catch (e) {
    console.warn(e);
    return [];
  }
}
