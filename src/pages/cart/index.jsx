import React, { useState } from "react";

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
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}

export default Cart;
