import React from "react";
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieListings from "./pages/MovieListings";
import MovieDetail from "./pages/MovieDetail";
import SeatSelection from "./pages/SeatSelection";
import BookingConfirmation from "./pages/BookingConfirmation"; 
import BookingHistory from "./pages/BookingHistory";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import SignUp from "./pages/SignUp"; 
import Login from "./pages/Login"; 

function App() {
  return (
    <Router>
      {/* Here we're setting up our routes.  */}
      <Routes>
        {/* Home Route: This is the landing page  */}
        <Route path="/" element={<Home />} />

        {/* Movie Listings Route: Shows all the movies available */}
        <Route path="/movies" element={<MovieListings />} />

        {/* Movie Details Route: Shows detailed information about a specific movie */}
        <Route path="/movies/:movieId" element={<MovieDetail />} />

        {/* Seat Selection Route: For selecting seats for a specific movie */}
        <Route path="/seats/:movieId" element={<SeatSelection />} />

        {/* Booking Confirmation Route: Displays the confirmation page after booking */}
        <Route path="/confirmation" element={<BookingConfirmation />} />

        {/* Payment Confirmation Route: Handles the payment confirmation process */}
        <Route path="/payment" element={<PaymentConfirmation />} />

        {/* Booking History Route: Shows the booking history */}
        <Route path="/history" element={<BookingHistory />} />

        {/* Sign-Up Route: The page for users to register */}
        <Route path="/sign-up" element={<SignUp />} /> {/* Added the route for the SignUp page */}

        {/* Login Route: The page for users to log in */}
        <Route path="/log-in" element={<Login />} /> {/* Added the route for the Login page */}
      </Routes>
    </Router>
  );
}

export default App;
