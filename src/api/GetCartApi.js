import axios from "axios";
import url from "../Constants";

const GetCart = async () => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    url: `${url}/cart`,
    method: "GET",
    headers: { "Content-Type": "application/json", authtoken },
  });
  return response.data;
};

export default GetCart;
