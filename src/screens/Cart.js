import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import Footer from "./Footer";
import UpdateCartApi from "../api/UpdateCartApi";
import DeleteCartApi from "../api/DeleteCartApi";

export default function Cart({ handleChange, cartApi, setCartApi }) {
	const [price, setPrice] = useState(0);

	const deleteCart = async (id) => {
		await DeleteCartApi(id);
		setCartApi(cartApi.filter((cart) => cart._id !== id));
	};

	const decrement = async (id, quantity) => {
		await UpdateCartApi(id, quantity);
		const findItem = cartApi.find((item) => item._id === id);
		const newCartApi = cartApi.filter((item) => item._id !== id);
		setCartApi([...newCartApi, { ...findItem, quantity: findItem.quantity - 1 }]);
	};
	const increment = async (id, quantity) => {
		await UpdateCartApi(id, quantity);
		const findItem = cartApi.find((item) => item._id === id);
		const newCartApi = cartApi.filter((item) => item._id !== id);
		setCartApi([...newCartApi, { ...findItem, quantity: findItem.quantity + 1 }]);
	};

	console.log(cartApi);
	const handlePrice = () => {
		let ans = 0;
		cartApi.map((item) => (ans += item.quantity * item.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	return (
		<>
			<section className="h-100 h-custom">
				<div className="container h-100 py-5">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col">
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th scope="col" className="h5">
												Shopping Bag
											</th>
											<th scope="col">Category</th>
											<th scope="col">Quantity</th>
											<th scope="col">Price</th>
										</tr>
									</thead>
									<tbody>
										{cartApi.map((item) => (
											<tr key={item._id}>
												<th scope="row">
													<div className="d-flex align-items-center">
														<img src={item.image} className="img-fluid" alt={item.title} />
														<div className="flex-column ms-4">
															<p className="mb">{item.title}</p>
														</div>
													</div>
												</th>
												<div className="flex-column">
													<p className="categoryAlign">{item.description}</p>
												</div>
												<td className="align-middle">
													<div className="d-flex flex-row">
														<button
															className="btn btn-link px-2"
															onClick={() => {
																decrement(item._id, item.quantity);
																if (item.quantity === 1) {
																	deleteCart(item._id);
																}
															}}
														>
															<i className="fas fa-minus"></i>
														</button>

														<p className="itemamount">{item.quantity}</p>
														<button className="btn btn-link" onClick={() => increment(item._id, item.quantity)}>
															<i className="fas fa-plus"></i>
														</button>
													</div>
												</td>
												<td className="align-middle">
													<p className="mb-0">${item.price}</p>
												</td>
												<td className="align-middle">
													<i className="fa-solid fa-trash fa-lg" onClick={() => deleteCart(item._id)}></i>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<div className="pricebox col-lg-4 col-xl-3">
								<div className="d-flex justify-content-between">
									<p className="mb-2">Subtotal</p>
									<p className="mb-2">${(Math.round(price * 100) / 100).toFixed(2)}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p className="mb-0">Shipping</p>
									<p className="mb-0">$3.00</p>
								</div>

								<hr className="my-4" />

								<div className="d-flex justify-content-between mb-4">
									<p className="mb-2">Total (tax included)</p>
									<p className="mb-2">${(Math.round((price + 3) * 100) / 100).toFixed(2)}</p>
								</div>

								<div className="btn-block btn-lg">
									<div className="d-flex justify-content-between">
										<button className="btn1">Checkout ${(Math.round((price + 3) * 100) / 100).toFixed(2)}</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
