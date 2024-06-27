import React, { useState, useEffect } from "react";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import HeroImage from "assets/images/hero.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products");
    }
  };

  return (
    <div className="w-full">
      <div className="content-center items-center flex w-full">
        <p className="mx-auto my-10">Products</p>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-4">
        {products.map((product) => (
          <Link to={`/detail/${product.id}`} key={product.id}>
            <div className="max-w-sm rounded overflow-hidden relative group cursor-pointer">
              <img className="w-full" src={HeroImage} alt="Product Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.nama}</div>
                <p className="text-gray-700 text-base">${product.harga}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {[...Array(product.rating)].map((_, index) => (
                  <StarIcon key={index} className="text-yellow-400" />
                ))}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">Checkout</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {error && (
        <div className="content-center items-center flex w-full">
          <p className="mx-auto my-10 text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
