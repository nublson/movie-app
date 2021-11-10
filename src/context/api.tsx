import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { MovieData, MovieProps } from "../types";

interface Props {
  children: ReactNode;
}

interface ApiContextData {
  movies: MovieProps[];
  getMovieData(movieId: string): Promise<MovieData>;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/movies/${movieId}`);

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    api
      .get("/movies")
      .then((response) => {
        //! ALERT
        const data = response.data.content;
        setMovies(data.slice(0, 20));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [movies]);

  const data = useMemo(() => [...movies], [movies]);

  return (
    <ApiContext.Provider value={{ movies: data, getMovieData }}>
      {children}
    </ApiContext.Provider>
  );
};
