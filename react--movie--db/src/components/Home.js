import React, { useState, useEffect } from "react";

// API
import API from "../API";

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// components

// hook

// image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      //   console.log(movies);

      setState((prev) => ({
        // spread operator
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);
  // todo: why the empty array?
  // only runs once

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
