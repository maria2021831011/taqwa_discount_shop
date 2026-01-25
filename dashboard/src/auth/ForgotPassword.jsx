// src/auth/ForgotPassword.jsx
import React, { useState } from "react";
import "./auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    // Call backend to send reset link
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remembered your password? <a href="/login">Login</a>
      </p>
    </div>
  );
}
