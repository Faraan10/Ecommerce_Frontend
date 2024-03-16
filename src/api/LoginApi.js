import axios from "axios";
import url from "../Constants";

const login = async (data) => {
	const response = await axios({
		url: `${url}/auth/login`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((res) => res.data)
		.catch((err) => err.response);
	return response;
};

export default login;
