import axios from "axios";
import url from "../Constants";

const products = async () => {
	const response = await axios({
		url: `${url}/products/`,
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default products;
