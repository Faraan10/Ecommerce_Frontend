import axios from "axios";
import url from "../Constants";

const register = async (data) => {
  const response = await axios({
    url: `${url}/auth/register`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(data),
  })
    .then((res) => res.data)
    .catch((err) => err.response);
  return response;
};

export default register;
