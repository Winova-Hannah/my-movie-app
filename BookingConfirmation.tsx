import React from "react";
import "../styles/BookingConfirmation.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom"; // To navigate between pages

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle the button click and navigate back to the home page
  const handleBackToHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="confirmation-container">
      {/* Header for the page */}
      <h2>Booking Confirmation</h2>

      {/* Image showing a celebratory scene */}
      <img
        src="https://media.licdn.com/dms/image/v2/D4E12AQERKt6kthpVoQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1656762248283?e=2147483647&v=beta&t=xbesJ35eipYF66XUtFz5r6jaMdSNiJ68cA18hKalSsw"
        alt="Booking Confirmation"
        className="confirmation-image"
      />

      {/* Confirmation message */}
      <p className="confirmation-message">
        Thank you for your booking! Your reservation has been successfully processed.
      </p>

      {/* Details about the booking */}
      <div className="booking-details">
        <h3>Your Booking Details:</h3>
        <ul>
          <li>Movie: <strong>Example Movie Title</strong></li>
          <li>Date: <strong>March 12, 2025</strong></li>
          <li>Seats: <strong>Row A, Seats 5, 6</strong></li>
          <li>Price: <strong>₹500</strong></li>
        </ul>
      </div>

      {/* Button to go back to the homepage */}
      <button className="back-to-home-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default BookingConfirmation;
