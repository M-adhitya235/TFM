import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from 'flowbite-react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <h2 className="text-2xl font-semibold mb-6">List of Products</h2>
      <Link
        to="/products/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
      >
        Add New Product
      </Link>
      <div className="overflow-x-auto mt-4">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Created By</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {products.map((product, index) => (
              <Table.Row key={product.uuid} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>{product.user.name}</Table.Cell>
                <Table.Cell>
                  <Link to={`/products/edit/${product.uuid}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Edit
                  </Link>
                  {" "}
                  <button onClick={() => deleteProduct(product.uuid)} className="font-medium text-red-600 hover:underline dark:text-red-500">
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
