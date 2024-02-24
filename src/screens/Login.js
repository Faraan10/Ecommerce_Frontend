import React, { useState } from "react";
import "../styles/login.css";
import loginApi from "../api/LoginApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = data;
	//console.log(data);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await loginApi(data);
		if (!response.token) {
			toast.error(response.data.message);
			return false;
		} else navigate("/");
		// setting token in local storage to access it later
		localStorage.setItem("token", response.token);
		// console.log(response);
		toast.success("login Successfull");
	};
	return (
		<>
			<hr />
			<body className="classbody">
				<div className="firstHalf"></div>
				<div className="wrapper">
					<h3 className="hclass">Login</h3>
					<form onSubmit={handleSubmit}>
						<div className="input-box">
							<input type="text" placeholder="Enter your email" name="email" value={email} onChange={handleChange} />
						</div>
						<div className="input-box">
							<input
								type="password"
								placeholder="Enter password"
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</div>
						{/* <div className="policy">
              <input type="checkbox" />
              <h3>I accept all terms & condition</h3>
            </div> */}
						<div className="input-box button">
							<input type="Submit" value="Login" />
						</div>
						<div className="text">
							<h3>
								Need an account? <Link to="/registration">Register now</Link>
							</h3>
						</div>
					</form>
				</div>
			</body>
		</>
	);
}
