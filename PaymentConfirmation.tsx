import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/PaymentConfirmation.css";

// You can hardcode the movie price and selected tickets in the component
const PaymentConfirmation: React.FC = () => {
  const navigate = useNavigate();

  // Hardcoded values for movie price and selected tickets
  const moviePrice = 150; // price per ticket (e.g., ₹150)
  const selectedTickets = 3; // number of tickets selected by the user

  // Calculate the total amount
  const totalAmount = moviePrice * selectedTickets;

  // State to store selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  // Payment methods data with image URLs you provided
  const paymentMethods = [
    { name: "Razorpay", image: "https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png", discount: 10 }, // 10% discount
    { name: "Debit Card", image: "https://i.pinimg.com/736x/5f/79/a6/5f79a6defe837d721dd2e3b2dba041e1.jpg", discount: 5 }, // 5% discount
    { name: "Google Pay", image: "https://avatars.githubusercontent.com/u/5232468?s=280&v=4", discount: 7 }, // 7% discount
  ];

  // Calculate discount based on the selected payment method
  const getDiscountedAmount = (discount: number) => {
    return totalAmount - (totalAmount * discount) / 100;
  };

  // Function to handle successful payment and redirect to confirmation page
  const handlePaymentSuccess = () => {
    navigate("/confirmation");
  };

  return (
    <div className="payment-container">
      <h2>Payment Confirmation</h2>

      {/* Displaying payment methods */}
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className={`payment-method-card ${selectedPaymentMethod === method.name ? "selected" : ""}`}
            onClick={() => setSelectedPaymentMethod(method.name)}
          >
            <img src={method.image} alt={method.name} className="payment-method-image" />
            <p>{method.name}</p>
            {selectedPaymentMethod === method.name && (
              <p className="discount">Discount: {method.discount}%</p>
            )}
          </div>
        ))}
      </div>

      {/* Displaying the total amount and discount if selected */}
      <div className="payment-details">
        <p><strong>Movie Price:</strong> ₹{moviePrice}</p>
        <p><strong>Number of Tickets:</strong> {selectedTickets}</p>
        <p><strong>Total Amount:</strong> ₹{totalAmount}</p>

        {selectedPaymentMethod && (
          <p>
            <strong>Discounted Total:</strong> ₹{getDiscountedAmount(paymentMethods.find((method) => method.name === selectedPaymentMethod)?.discount || 0).toFixed(2)}
          </p>
        )}
      </div>

      <button onClick={handlePaymentSuccess}>Confirm Payment</button>
    </div>
  );
};

export default PaymentConfirmation;
