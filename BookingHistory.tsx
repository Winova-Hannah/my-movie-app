// Bringing in React and some built-in hooks we’ll need — useEffect for running code when the component loads, and useState to hold our list of bookings.
import React, { useEffect, useState } from "react";

// Importing the CSS file to make this page look styled and not plain.
import "../styles/BookingHistory.css";

// Here I define what a booking looks like — it should have the name of the movie, the seats booked, the time of the show, and the total price.
interface Booking {
  movieName: string;
  seats: string[];
  time: string;
  total: number;
}

// This is the actual BookingHistory component that’ll show all previous bookings stored in local storage.
const BookingHistory: React.FC = () => {
  // Setting up a state to keep track of all the bookings. It starts off as an empty list.
  const [bookings, setBookings] = useState<Booking[]>([]);

  // When the component first loads, I’m grabbing the bookings from localStorage (if any were saved before).
  useEffect(() => {
    // Try to get the saved bookings — if nothing’s there, use an empty list
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    // Store them in state so we can display them below
    setBookings(savedBookings);
  }, []);

  // Now comes the actual stuff that gets shown on the page
  return (
    <div className="history-container">
      {/* Page title */}
      <h1>Your Booking History</h1>

      {/* If there are no bookings, just show a message. Otherwise, list them out one by one. */}
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul className="booking-list">
          {/* Looping through all the saved bookings and displaying each one */}
          {bookings.map((booking, index) => (
            <li key={index} className="booking-item">
              <h3>{booking.movieName}</h3>
              <p><strong>Date & Time:</strong> {booking.time}</p>
              <p><strong>Seats:</strong> {booking.seats.join(", ")}</p>
              <p><strong>Total Paid:</strong> ₹{booking.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Exporting the component so other parts of the app (like routing) can use it.
export default BookingHistory;
