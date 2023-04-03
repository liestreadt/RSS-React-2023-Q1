import { LocationNames } from './types';

export function getDateFromResponse(date: string) {
  const newDate = new Date(date);
  return `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`;
}

export function getCurrentLocationName(pathname: string): string {
  switch (pathname) {
    case '/':
      return LocationNames.Main;
    case '/about':
      return LocationNames.About;
    case '/forms':
      return LocationNames.Forms;
    default:
      return LocationNames.NotFound;
  }
}
