import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import fitMan from "../../Assets/images/fitman.png";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

const Register = ({ onSwitchMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      setError("Email already exists.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <Container
      className="main-register d-flex justify-content-center align-items-center gap-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="register-image">
        <img src={fitMan} alt="Fit Man" />
      </div>
      <div
        style={{
          width: "500px",
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "rgba(96, 0, 0, 0.8)",
          color: "white",
          borderRadius: "20px",
          opacity: "0.8",
        }}
      >
        <h3 className="text-center mb-4">Register FitMaker</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "white",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "black",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "black",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                backgroundColor: "#FFF",
                color: "black",
                borderColor: "#ccc",
              }}
            />
          </Form.Group>

          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}

          <Button variant="danger" type="submit" className="w-100 mt-3">
            Register
          </Button>

          <div className="text-center mt-3">
            <span style={{ color: "#ccc" }}>
              Already have an account?{" "}
              <span
                 onClick={() => navigate("/login")}
                style={{
                  color: "#fff",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Login
              </span>
            </span>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
