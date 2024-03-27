import React, { useState } from "react";

const CardComponent = ({ product, onAddToWishlist, onAddToCart }) => {
  const { image, title, harga, status } = product;
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToWishlist = () => {
    setIsAddedToWishlist(true);
    onAddToWishlist(product);
  };

  const addToCart = () => {
    setIsAddedToCart(true);
    onAddToCart(product);
  };

  return (
    <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center">
      <div className="w-40 h-40 mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-left mb-1 ">Harga: {harga}</p>
      <p className="text-gray-700 text-left mb-1">Status: {status}</p>
      <div className="flex">
        {!isAddedToWishlist ? (
          <button
            className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-l border border-black"
            onClick={addToWishlist}
          >
            Add to Wishlist
          </button>
        ) : (
          <p className="text-green-500 mt-4 mx-2">Added to Wishlist</p>
        )}
        {!isAddedToCart ? (
          <button
            className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-r border border-black"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        ) : (
          <p className="text-green-500 mt-4 mx-2">Added to Cart</p>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
