import axios from "axios";
import url from "../Constants";

const DeleteCart = async (cartid) => {
  const authtoken = localStorage.getItem("token");
  const response = await axios({
    url: `${url}/cart`,
    method: "DELETE",
    headers: { "Content-Type": "application/json", authtoken, cartid },
  });
  return response.data;
};

export default DeleteCart;
