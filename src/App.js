import React, { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./screens/Navbar";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getUserApi from "./api/GetUserApi";
import getCartApi from "./api/GetCartApi";
function App() {
  const [user, setUser] = useState();

  const [cartApi, setCartApi] = useState([]);

  const getCart = async () => {
    const response = await getCartApi();
    setCartApi(response);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    token && getCart();
  }, []);

  const userInfo = async () => {
    const response = await getUserApi();
    setUser(response);
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div className="App">
      <SpeedInsights />
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} cartApi={cartApi} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <Products
                cartApi={cartApi}
                setCartApi={setCartApi}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <SingleProduct cartApi={cartApi} setCartApi={setCartApi} />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartApi={cartApi} setCartApi={setCartApi} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
