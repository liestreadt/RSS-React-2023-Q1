import { LocationNames } from './types';

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
