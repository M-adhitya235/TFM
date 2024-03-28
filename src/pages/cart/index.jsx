import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 15, quantity: 1, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 20, quantity: 3, image: "https://via.placeholder.com/150" }
  ]);

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-white-200">
      <Navbar isDashboard={true} isLoggedIn={true} />
      <h2 className="text-2xl font-bold mb-4">Keranjang</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="border rounded-lg p-4">
            <img src={item.image} alt={item.name} className="mx-auto mb-4" />
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="text-gray-600">Harga: ${item.price}</div>
            <div className="text-gray-600">Jumlah: {item.quantity}</div>
            <div className="text-gray-600">Subtotal: ${calculateSubtotal(item.price, item.quantity)}</div>
            <button onClick={() => removeFromCart(item.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Hapus</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;


// API
// import React, { useState, useEffect } from "react";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from API or any data source
//     fetch("https://api.example.com/products")
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   const calculateSubtotal = (price, quantity) => {
//     return price * quantity;
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter(item => item.id !== itemId));
//   };

//   const addToCart = (product) => {
//     // Find item in cart based on ID
//     const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

//     if (existingItemIndex !== -1) {
//       // Update quantity for existing item
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//     } else {
//       // Add new item to cart with quantity 1
//       setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const handleProductClick = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Keranjang</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {cartItems.map(item => (
//           <div key={item.id} className="border rounded-lg p-4">
//             <img src={item.image} alt={item.name} className="mx-auto mb-4" />
//             <div className="text-lg font-semibold">{item.name}</div>
//             <div className="text-gray-600">Harga: ${item.price}</div>
//             <div className="text-gray-600">Jumlah: {item.quantity}</div>
//             <div className="text-gray-600">Subtotal: ${calculateSubtotal(item.price, item.quantity)}</div>
//             <button onClick={() => removeFromCart(item.id)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Hapus</button>
//           </div>
//         ))}
//       </div>

//       {/* Display products here */}
//       <div>
//         {products.map(product => (
//           <div key={product.id} className="border rounded-lg p-4">
//             <img src={product.image} alt={product.name} className="mx-auto mb-4" />
//             <div className="text-lg font-semibold">{product.name}</div>
//             <div className="text-gray-600">Harga: ${product.price}</div>
//             <button onClick={() => addToCart(product)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Tambahkan ke Keranjang</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;
