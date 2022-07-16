import { AuthStatus } from '../const';

type FilmData = {
    id: number,
    title: string,
    genre: string,
    year: number,
  };

type FilmObjectProps = {
  filmObject: FilmData,
};

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export type {FilmData, FilmObjectProps, PrivateRouteProps};
