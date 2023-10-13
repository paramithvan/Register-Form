import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    alert("Welcome " + name);
  };

  return (
    <div className="Register">
      <form
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <h2> Register </h2>
        <p> Please register to join our content </p>
        <div className="userData">
          <label>
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
        </div>
        <label className="CheckBox">
          <input type="checkbox" name="terms" required /> I agree with the terms
          of service
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
