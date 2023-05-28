import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [detail, setDetail] = useState([]);
  const [tvDetail, setTvDetail] = useState([]);
  const [movieId, setMovieId] = useState();
  const [tvId, setTvId] = useState();
  const [cast, setCast] = useState([]);
  const [tvCast, setTvCast] = useState([]);
  const [genre, setGenre] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [tvPage, setTvPage] = useState(1);
  const [images, setImages] = useState();

  const fetchPopular = async () => {
    const api = await fetch(`
            https://api.themoviedb.org/3/movie/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    setPopular(results);
    setLoading(false);
  };
  const fetchImages = async () => {
    const api = await fetch(`
    https://api.themoviedb.org/3/movie/${movieId}/images?api_key=0af31f4831741bb6287a87a60e641056`);
    const { backdrops } = await api.json();
    // console.log(results);
    setImages(backdrops);
  };
  const fetchTopRated = async () => {
    const api = await fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`);
    const { results } = await api.json();
    setTopRated(results);
    setLoading(false);
  };
  const fetchNowPlaying = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=${page}`
    );
    const { results } = await api.json();
    setNowPlaying(results);
  };
  const fetchUpComing = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=1`
    );
    const { results } = await api.json();
    setUpComing(results);
    setLoading(false);
  };
  const fetchTvShow = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=0af31f4831741bb6287a87a60e641056&language=en-US&page=${tvPage}`
    );
    const { results } = await api.json();
    setTvShow(results);
    setLoading(false);
  };
  const fetchMovieDetail = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const results = await api.json();
    setDetail(results);
  };
  const fetchCast = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { cast } = await api.json();
    setCast(cast);
  };
  const fetchTvCast = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { cast } = await api.json();
    setTvCast(cast);
  };

  const fetchTvDetail = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const results = await api.json();
    setTvDetail(results);
  };
  const fetchTrailer = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0af31f4831741bb6287a87a60e641056&language=en-US`
    );
    const { results } = await api.json();
    setTrailer(results);
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
    fetchUpComing();
  }, []);
  useEffect(() => {
    fetchTvShow();
    fetchNowPlaying();
  }, [page, tvPage]);
  useEffect(() => {
    fetchMovieDetail();
    fetchTrailer();
    fetchCast();
    fetchImages();
  }, [movieId]);
  useEffect(() => {
    fetchTvDetail();
    fetchTvCast();
  }, [tvId]);
  const data = {
    popular,
    topRated,
    nowPlaying,
    upComing,
    tvShow,
    detail,
    tvDetail,
    genre,
    setMovieId,
    setTvId,
    cast,
    tvCast,
    trailer,
    loading,
    detailLoading,
    setDetailLoading,
    setTvPage,
    setPage,
    images,
  };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const StateContextCustom = () => useContext(StateContext);
