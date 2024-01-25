import React, { useState } from "react";
import RegisterApi from "../api/RegisterApi";
import { useNavigate } from "react-router-dom";
import "../styles/registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //console.log(data);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length < 3) {
      alert("username should not be <3 characters");
    } else if (password !== confirmPassword) {
      alert("password and confirm passwords must match...");
    } else {
      const response = await RegisterApi(data);
      if (!response.token) {
        alert(response.data.message);
        return;
      } else {
        alert("Registration Successfull");
      }
      navigate("/login");
      // setting token in local sotrage to access it later
      localStorage.setItem("token", response.token);
      // console.log(response);
    }
  };

  return (
    <>
      <div className="classbodys">
        <div className="wrapperregister">
          <h3 className="hclass">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Create password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="policy">
              <input type="checkbox" />
              <h3>I accept all terms & condition</h3>
            </div>
            <div className="input-box button">
              <input type="Submit" value="Register Now" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <Link to="/login">Login now</Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
