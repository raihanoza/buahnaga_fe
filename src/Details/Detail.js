import NavDetail from "components/NavDetail";
import React, { useEffect, useState } from "react";
import HeroImage from "assets/images/hero.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  console.log(product);
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Handle error fetching product data
      }
    };

    fetchProductDetail();
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white text-black font-extrabold px-20">
      <div className="h-screen flex flex-col">
        <NavDetail />
        <div className="flex flex-1">
          <div className="flex-1 flex items-center justify-center ">
            <img src={HeroImage} alt="Project Photo" className="max-w-full max-h-full" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="p-10 bg-gray-100 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl mb-4">{product.nama}</h2>
              <p className="mb-4">${product.harga}</p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg"
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>
              <a href="http://wa.me/+6285290786090" target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Checkout
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
