import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import ProductsApi from "../api/ProductsApi";
import Footer from "./Footer";
import Spinner from "./Spinner";

export default function Products({ cartApi, setCartApi }) {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    const response = await ProductsApi();
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    setLoading(true);
  }, []);

  // const getProducts = async () => {
  //   await axios
  //     .get("http://localhost:3001/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            {products.length > 0 &&
              products.map((product) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                  <DisplayProducts
                    item={product}
                    cartApi={cartApi}
                    setCartApi={setCartApi}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
