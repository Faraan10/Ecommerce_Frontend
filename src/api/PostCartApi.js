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
  });
  return response.data;
};

export default PostCart;
