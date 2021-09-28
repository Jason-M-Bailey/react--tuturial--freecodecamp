import React from "react";

// API
// moved to useHomeFetch.js

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();

  console.log(state);

  return (
    <>
      {/* !searchTerm = display HeroImage when there is no searchTerm provided  */}
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      {/* ternary operator changes text based on whether a searchTerm is provided */}
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>

      {/* will show Spinner if loading is set to true and vice versa */}
      {loading && <Spinner />}

      {/* checks to see if we are already displaying all pages if results, if not: show Button to 'Load More' */}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" />
      )}
    </>
  );
};

export default Home;
