import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CardComponent from "../../components/CardCompo";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then(response => {
        if (!response.ok) { 
          throw new Error('Gagal mengambil data produk');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div className="min-h-screen bg-white-200">
      <Navbar isDashboard={true} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl text-gray-800 font-bold mb-4 ml-4">Today</h1>
        {/* Menampilkan pesan kesalahan jika terjadi */}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Merender kartu untuk setiap produk */}
          {products.map(product => (
            <CardComponent
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;