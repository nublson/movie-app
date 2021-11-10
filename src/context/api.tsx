import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { MovieData, MovieProps } from "../types";

interface Props {
  children: ReactNode;
}

interface ApiContextData {
  movies: MovieProps[];
  filter: string;
  getMovieData(movieId: string): Promise<MovieData>;
  filterByRevenue(): void;
  filterPerYear(): void;
  resetFilter(): void;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const [filter, setFilter] = useState("none");

  const getMovies = () => {
    api
      .get("/movies")
      .then((response) => {
        //! ALERT
        const data = response.data.content;
        setMovies(data.slice(0, 50));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getMovieData = async (movieId: string) => {
    try {
      const response = await api.get(`/movies/${movieId}`);

      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const filterByRevenue = () => {
    setFilter("byRevenue");
    console.log("Filtering by revenue...");
  };

  const filterPerYear = () => {
    setFilter("perYear");
    console.log("Filtering per year...");
  };

  const resetFilter = () => {
    setFilter("none");
    console.log("Listing all movies...");
  };

  useEffect(() => {
    getMovies();
  }, [movies]);

  const data = useMemo(() => [...movies], [movies]);

  return (
    <ApiContext.Provider
      value={{
        movies: data,
        filter,
        getMovieData,
        filterByRevenue,
        filterPerYear,
        resetFilter,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
