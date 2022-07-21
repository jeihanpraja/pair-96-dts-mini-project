import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CardDetailMovie from "../components/CardDetailMovie";
import NavBar from "../components/NavBar";

const FilmDetail = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  let params = useParams();
  let parMovieId = parseInt(params.movieId);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseFromTMDB = await tmdb.get("/movie/popular");
        setMovies(responseFromTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <Box>
      {/* <Typography variant="h5">Movie Detail Page</Typography> */}
      <NavBar />
      <Typography>{`Movie Id from params : ${parMovieId}`}</Typography>
      {/* <CardDetailMovie selectedMovie={movies?.find((movie) => movie.id === params.movieId)} /> */}
      {/* <CardDetailMovie selectedMovie={movies[2]} /> */}
    </Box>
  );
};

export default FilmDetail;
