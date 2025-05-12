import React, { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import "../styles/MovieListings.css";

const MovieListings: React.FC = () => {
  const [filter, setFilter] = useState({
    name: "",
    genre: "",
    releaseDate: "",
  });

  // Function to handle input updates for filters
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredMovies = movies.filter((movie) => {
    const nameMatch = filter.name
      ? movie.name.toLowerCase().includes(filter.name.toLowerCase())
      : true;
    const genreMatch = filter.genre
      ? movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
      : true;
    const dateMatch = filter.releaseDate
      ? movie.releaseDate.includes(filter.releaseDate)
      : true;

    return nameMatch && genreMatch && dateMatch;
  });

  return (
    <div className="movie-listings-container">
      <header>
        <h1>All Movies</h1>
        <div className="filters">
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            value={filter.name}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Filter by genre"
            value={filter.genre}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="releaseDate"
            placeholder="Filter by release date (YYYY-MM-DD)"
            value={filter.releaseDate}
            onChange={handleFilterChange}
          />
        </div>
      </header>

      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
              <Link to={`/movies/${movie.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieListings;
