import axios from "axios";
import url from "../Constants";

const PostCart = async (productid) => {
	const token = localStorage.getItem("token");
	const response = await axios({
		url: `${url}/cart`,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			authtoken: token,
			productid,
		},
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default PostCart;
