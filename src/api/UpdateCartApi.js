import axios from "axios";
import url from "../Constants";

const UpdateCart = async (quantity, cartid) => {
  const token = localStorage.getItem("token");
  const response = await axios({
    url: `${url}/cart/`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authtoken: token,
      cartid,
    },
    data: JSON.stringify({ quantity }),
  });
  return response.data;
};

export default UpdateCart;
