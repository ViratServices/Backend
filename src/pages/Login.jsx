import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const email = "virat";
  const myPassword = "virat";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail.trim !== "" && password.trim !== "") {
      if (mail === email && password === myPassword) {
        navigate("/home");
      }
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Login Form</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="Username"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="row">
            <i className="fas fa-lock" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="row button">
            <input type="submit" defaultValue="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;