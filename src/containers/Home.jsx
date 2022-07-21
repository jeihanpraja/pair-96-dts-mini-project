import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

import NavBar from "../components/NavBar";
import ListMovies from "./ListMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);

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
    <>
      <NavBar />
      <ListMovies movies={movies} />
      {/* {position === "home" ?  : <FilmDetail movies={movies} />} */}
    </>
  );
};

export default Home;
