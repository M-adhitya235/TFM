import React, { useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    setWishlist(newWishlist);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-700">Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((product, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{product.title}</span>
              <button
                onClick={() => removeFromWishlist(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
