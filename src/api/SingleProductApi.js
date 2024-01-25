import axios from "axios";
import url from "../Constants";

const products = async (id) => {
  const response = await axios({
    url: `${url}/products/${id}`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export default products;
