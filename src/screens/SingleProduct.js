import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/singleProduct.css";
import SingleProductApi from "../api/SingleProductApi";
import PostCartApi from "../api/PostCartApi";

export default function SingleProduct({ cartApi, setCartApi }) {
	const params = useParams();

	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await SingleProductApi(params.id);
		setProducts(response);
	};

	useEffect(() => {
		getProducts();
	}, []);
	console.log(products);

	const addToCart = async (id) => {
		const response = await PostCartApi(id);
		console.log(response);
		setCartApi([...cartApi, response]);
	};

	return (
		<>
			<hr />
			<div className="cards mb-3 mt-4">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={products.image} className="img-display" alt={products.title} />
					</div>
					<div className="col-md-8">
						<div className="card-body mt-5">
							<h3 className="card-title">{products.title}</h3>
							<h6 className="card-text">{products.description}</h6>
							<h6 className="card-text">Price: {products.price}$</h6>
							<p className="card-text">
								<small className="text-body-secondary">Last updated 3 mins ago</small>
							</p>
							<button id="btnadd" onClick={() => addToCart(products._id)}>
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
