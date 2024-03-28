import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CardComponent from "../../components/CardCompo";
import Footer from "../../components/Footer";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter products based on search term
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg--200">
      <Navbar isDashboard={true} isLoggedIn={isLoggedIn} />
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
      <Footer />
    </div>
  );
}

export default Dashboard;
