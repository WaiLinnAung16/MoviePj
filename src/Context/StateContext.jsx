import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genre, setGenre] = useState([]);
  const [movieId, setMovieId] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const fetchPopular = async () => {
    const api = await fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    console.log(results);
    setPopular(results);
  };
  const fetchTopRated = async () => {
    const api = await fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    // console.log(results);
    setTopRated(results);
  };
  const fetchGenre = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { genres } = await api.json();
    setGenre(genres);
  };
  const fetchMovieId = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { results } = await api.json();
    console.log(results);
    setTrailer(results);
  };
  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchGenre();
  }, []);
  useEffect(() => {
    fetchMovieId();
  }, [movieId]);
  const data = { popular, topRated, genre, setMovieId, trailer };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
