import React, { useEffect, useState } from "react";
import Navbar from "./screens/Navbar";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";
import { Routes, Route } from "react-router-dom";
import getUserApi from "./api/GetUserApi";
import getCartApi from "./api/GetCartApi";
// import UpdateCartApi from "./api/UpdateCartApi";

function App() {
	const [user, setUser] = useState();

	const [cartApi, setCartApi] = useState([]);

	const getCart = async () => {
		const response = await getCartApi();
		setCartApi(response);
	};
	useEffect(() => {
		const token = localStorage.getItem("token");
		token && getCart();
	}, []);
	//console.log(cartApi);

	const userInfo = async () => {
		const response = await getUserApi();
		setUser(response);
		// this gives us the access to user information
		//console.log(response);
	};

	useEffect(() => {
		userInfo();
	}, []);

	// const handleChange = (item, d) => {
	//   let ind = -1;
	//   cartApi.map((data, index) => {
	//     if (data.id === item.id) ind = index;
	//   });
	//   const tempArr = cartApi;
	//   tempArr[ind].amount += d;

	//   if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
	//   setCartApi([...tempArr]);
	// };

	return (
		<div className="App">
			<Navbar user={user} setUser={setUser} cartApi={cartApi} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/products"
					element={<Products cartApi={cartApi} setCartApi={setCartApi} user={user} setUser={setUser} />}
				/>
				<Route path="/products/:id" element={<SingleProduct cartApi={cartApi} setCartApi={setCartApi} />} />
				<Route
					path="/cart"
					element={
						<Cart
							// handleChange={handleChange}
							cartApi={cartApi}
							setCartApi={setCartApi}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
