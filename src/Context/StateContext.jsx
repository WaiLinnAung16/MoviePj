import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [genre, setGenre] = useState([]);

  const fetchPopular = async () => {
    const api = await fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    setPopular(results);
  };
  const fetchTopRated = async () => {
    const api = await fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    setTopRated(results);
  };
  const fetchNowPlaying = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`
    );
    const { results } = await api.json();
    setNowPlaying(results);
    console.log(results);
  };
  const fetchUpComing = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`
    );
    const { results } = await api.json();
    setUpComing(results);
  };
  const fetchTvShow = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`
    );
    const { results } = await api.json();
    setTvShow(results);
  };
  const fetchGenre = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { genres } = await api.json();
    setGenre(genres);
  };

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchGenre();
    fetchNowPlaying();
    fetchUpComing();
    fetchTvShow();
  }, []);

  const data = { popular, topRated, nowPlaying, upComing, tvShow, genre };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
