// src/auth/Login.jsx
import React, { useState } from "react";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login with\nEmail: ${email}\nPassword: ${password}`);
    // Here you can call your backend API
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot password? <a href="/forgot">Click here</a>
      </p>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
