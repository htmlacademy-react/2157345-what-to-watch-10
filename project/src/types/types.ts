type FilmData = {
    id: number,
    title: string,
    genre: string,
    year: number,
  };

type FilmObjectProps = {
  filmObject: FilmData,
};

export type {FilmData, FilmObjectProps};
