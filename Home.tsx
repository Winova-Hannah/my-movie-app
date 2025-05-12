import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* This is the top section with the app name and nav links */}
      <header>
        <h1>🎬 MovieTime</h1>
        <nav className="nav-bar">
          <Link to="/movies">Movies</Link>
          <Link to="/upcoming">Upcoming Shows</Link>
          <Link to="/history">Booking History</Link>
        </nav>
      </header>

      {/* Movie Banner Section */}
      <div className="movie-banner">
       
        <div className="banner-content">
          <p>Watch now and enjoy an immersive movie experience</p>
        </div>
      </div>

      {/* Now Showing Heading */}
      <h2>Now Showing</h2>

      {/* Movie List */}
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.name} />
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>

      {/* Sign Up and Log In Links */}
      <div className="auth-links">
        <Link to="/sign-up">
          <button className="auth-button">Sign Up</button>
        </Link>
        <Link to="/log-in">
          <button className="auth-button">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
