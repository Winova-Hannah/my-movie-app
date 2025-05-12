import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";  // Importing the CSS for styling the SignUp page

// Functional component for the Sign-Up page
const SignUp: React.FC = () => {
  // State to manage email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevent page reload on form submission
    console.log("Form submitted", email, password);  // Log the submitted values (You can later replace this with actual submission logic)

    // You can implement actual form submission logic here, e.g., making an API call to create a new account
  };

  return (
    // The main container that holds the entire form
    <div className="sign-up-login-body">
      {/* Container for the form with the dark background and centered form */}
      <div className="sign-up-login-form-container">
        {/* Heading for the page */}
        <h2>Create Account</h2>

        {/* Form for Sign Up */}
        <form onSubmit={handleSubmit}>
          {/* Input field for Email */}
          <input
            type="text"
            placeholder="Email"
            value={email}  // Bind input field with state variable email
            onChange={(e) => setEmail(e.target.value)}  // Update state whenever the input changes
            required  // This makes the email field required to submit the form
          />

          {/* Input field for Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}  // Bind input field with state variable password
            onChange={(e) => setPassword(e.target.value)}  // Update state whenever the input changes
            required  // This makes the password field required to submit the form
          />

          {/* Submit button for the form */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Link to navigate to the Login page for users who already have an account */}
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

// Exporting the SignUp component so it can be used in other parts of the application
export default SignUp;
