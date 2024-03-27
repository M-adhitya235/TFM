import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardComponent from "../components/CardCompo";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import { getMe } from "../features/authSlice";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

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
        <Welcome />
        <h1 className="text-xl text-gray-800 font-bold mt-4 mb-4 ml-4">Today</h1>
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
