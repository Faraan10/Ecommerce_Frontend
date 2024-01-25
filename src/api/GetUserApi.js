import axios from "axios";
import url from "../Constants";

const getUser = async () => {
  // getting token from local storage
  const token = localStorage.getItem("token");
  //console.log(token);
  const response = await axios({
    url: `${url}/auth/getUser`,
    method: "GET",
    headers: { "Content-Type": "application/json", authtoken: token },
  });
  return response.data;
};

export default getUser;
