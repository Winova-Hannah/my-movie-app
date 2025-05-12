// Bringing in React so we can write our component
import React from "react";

// useParams helps us pull the movie ID from the URL
// Link lets us move between pages without reloading
import { useParams, Link } from "react-router-dom";

// Grabbing our movie list from the data file
import { movies } from "../data/movies";

// Pulling in some styling so this page looks nice
import "../styles/MovieDetail.css";

// The component that shows info for one specific movie
const MovieDetail: React.FC = () => {
  // Grab the movie ID straight from the URL (like /movies/3 gives us "3")
  const { movieId } = useParams<{ movieId: string }>(); 

  // Find the movie that matches the ID from the URL
  const movie = movies.find((movie) => movie.id === movieId); 

  // If nothing matches (maybe a wrong URL), just tell the user
  if (!movie) {
    return <p>Movie not found</p>;
  }

  // If the movie exists, show all its info
  return (
    <div className="movie-detail-container">
      <h1>{movie.name}</h1>
      <img src={movie.poster} alt={movie.name} />

      {/* Showing some details like genre, length, and description */}
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Description:</strong> {movie.description}</p>

      {/* Link to the seat selection page for this movie */}
      <Link to={`/seats/${movie.id}`}>Book Now</Link>
    </div>
  );
};

// Finally, exporting the component so it can be used elsewhere
export default MovieDetail;
