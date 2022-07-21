import React from "react";

import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";

const CardDetailMovie = ({ selectedMovie }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    <Card sx={{ width: 800, alignItems: "center", margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={`${baseUrlForMovie}${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {selectedMovie.title}
          </Typography>
          <Typography variant="body1" component="div">
            {selectedMovie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDetailMovie;
