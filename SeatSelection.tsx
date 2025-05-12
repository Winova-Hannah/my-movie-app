import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "../styles/SeatSelection.css";

// This is the SeatSelection component where users can pick their seats for the movie.
const SeatSelection: React.FC = () => {
  // Keeping track of the seats the user selects
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);  
  const [selectedDate, setSelectedDate] = useState<string>("2025-03-12");  // Initial date
  const [selectedTime, setSelectedTime] = useState<string>("18:00");  // Initial time
  const navigate = useNavigate();  // This is used to move to another page when needed
  
  // Here are the seats that are already unavailable (e.g., reserved or broken).
  const unavailableSeats = new Set([
    "A5", "B2", "C7", "E3", "F8" 
  ]);

  // This function is triggered when a user clicks on a seat.
  // It either selects or unselects the seat, depending on its current state.
  const toggleSeatSelection = (seat: string) => {
    // We only want to let users select available seats, not the unavailable ones
    if (!unavailableSeats.has(seat)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.includes(seat)
          ? prevSelectedSeats.filter((s) => s !== seat)  // If it's already selected, remove it from the list
          : [...prevSelectedSeats, seat]  // If not, add it to the list of selected seats
      );
    }
  };

  // When the user is ready to confirm their selection, this function will send them to the payment page.
  const handleProceedBooking = () => {
    console.log("Selected Seats: ", selectedSeats);
    console.log("Selected Date: ", selectedDate);
    console.log("Selected Time: ", selectedTime);  // Log selected date and time as well
    navigate("/payment");  // Redirect the user to the payment page to finalize the booking
  };

  // Defining the rows and how many seats are in each row
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const seatsPerRow = 10;

  // Dummy data for movie times
  const availableTimes = ["10:00", "14:00", "18:00", "21:00"];
  const availableDates = ["2025-03-12", "2025-03-13", "2025-03-14", "2025-03-15"];

  return (
    <div className="seat-selection-container">
      {/* Dropdown for selecting the movie date */}
      <div className="date-time-selection">
        <div className="date-selection">
          <label htmlFor="date">Select Date:</label>
          <select 
            id="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {availableDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for selecting the movie time */}
        <div className="time-selection">
          <label htmlFor="time">Select Time:</label>
          <select 
            id="time" 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Seat Selection grid */}
      <div className="screen">SCREEN</div>
  
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          <div className="row-label">{row}</div>
          {Array.from({ length: seatsPerRow }, (_, index) => {
            const seat = `${row}${index + 1}`;  // Each seat gets a unique ID (like A1, B2)
            const isSeatSelected = selectedSeats.includes(seat);  // Is this seat currently selected?
            const isSeatUnavailable = unavailableSeats.has(seat);  // Is this seat unavailable?

            return (
              <div
                key={seat}
                className={`seat ${isSeatSelected ? "selected" : "available"} ${isSeatUnavailable ? "unavailable" : ""}`}
                onClick={() => !isSeatUnavailable && toggleSeatSelection(seat)}  // Only allow click if the seat isn't unavailable
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      ))}

      {/* Once the user is done selecting seats, they can proceed to payment */}
      <button className="proceed-button" onClick={handleProceedBooking}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
