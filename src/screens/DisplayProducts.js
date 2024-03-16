import React from "react";
import "../styles/displayProducts.css";
import { Link } from "react-router-dom";
import PostCart from "../api/PostCartApi";
import { toast } from "react-toastify";

export default function DisplayProducts({ item, cartApi, setCartApi }) {
	const addCart = async (id) => {
		const response = await PostCart(id);
		const token = localStorage.getItem("token");
		if (response?.status) {
			toast.error(response.data.message);
			return;
		} else if (!response) {
			//console.log(response);
			toast.error("Login to Add to Cart");
			return;
		} else {
			token && setCartApi([...cartApi, response]);
			toast.success("Item added to the cart");
		}
	};
	//console.log(cartApi);

	return (
		<>
			<div className="card">
				<Link to={`/products/${item._id}`} state={item}>
					<img className="card-img-top" src={item.image} alt={item.title} />
				</Link>
				<div className="card-body">
					<h5 className="card-title text-truncate">{item.title}</h5>
					<p className="card-text text-truncate">{item.description}</p>
					<p className="card-text">${item.price}</p>
					<button id="btn1" onClick={() => addCart(item._id)}>
						Add To Cart
					</button>
				</div>
			</div>
		</>
	);
}
