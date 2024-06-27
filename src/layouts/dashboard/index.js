import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productRate, setProductRate] = useState("");
  const [error, setError] = useState("");

  // Fetch products from server
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

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        nama: productName,
        jumlah: productQty,
        harga: productPrice,
        rating: productRate,
      };

      await axios.post("http://localhost:3001/products", newProduct);
      fetchProducts(); // Refresh the product list
      // Clear input fields
      setProductName("");
      setProductQty("");
      setProductPrice("");
      setProductRate("");
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product");
    }
  };

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <div className="grid grid-cols-4 gap-2">
            <Card className="px-2 py-2">
              <div className="bg-slate-600 px-2 py-1 rounded-t-md">
                <p className="text-sm font-bold text-white">Tambahkan Product</p>
              </div>
              <label className="text-xs my-1">Nama Product</label>
              <input
                type="text"
                className="border border-slate-400 rounded-md text-sm py-1 px-2"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label className="text-xs my-1">Qty</label>
              <input
                type="text"
                className="border border-slate-400 rounded-md text-sm py-1 px-2"
                value={productQty}
                onChange={(e) => setProductQty(e.target.value)}
              />
              <label className="text-xs my-1">Harga</label>
              <input
                type="text"
                className="border border-slate-400 rounded-md text-sm py-1 px-2"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <label className="text-xs my-1">Rate</label>
              <input
                type="text"
                className="border border-slate-400 rounded-md text-sm py-1 px-2"
                value={productRate}
                onChange={(e) => setProductRate(e.target.value)}
              />
              <div
                className="bg-slate-600 mt-5 rounded-md py-2 hover:bg-slate-500 cursor-pointer"
                onClick={handleAddProduct}
              >
                <p className="text-sm text-center text-white">Tambahkan</p>
              </div>
            </Card>
            <Card className="col-span-3">
              <Grid item xl={12} py={2} px={3}>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden rounded-xl">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b bg-slate-600 font-medium text-white">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                No.
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Nama
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Qty
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Harga
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Rate
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product, index) => (
                              <tr key={product.id} className="dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                  {index + 1}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">{product.nama}</td>
                                <td className="whitespace-nowrap px-6 py-4">{product.jumlah}</td>
                                <td className="whitespace-nowrap px-6 py-4">{product.harga}</td>
                                <td className="whitespace-nowrap px-6 py-4">{product.rating}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Card>
          </div>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
