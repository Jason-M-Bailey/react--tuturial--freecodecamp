import React from "react";

// components
import Thumb from "../Thumb";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

// image
import NoImage from "../../images/no_image.jpg";

// styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
    <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
            <h1>{movie.title}</h1>
        </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
