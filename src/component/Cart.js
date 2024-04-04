import React from 'react';

const Cart = ({ cart, remove }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {cart.map((cartItem, index) => (
        <div key={index} className="flex flex-col w-1/2 md:flex-row items-center justify-around border-b border-gray-600 bg-sky-100 py-4">
          <img src={cartItem.image} alt={cartItem.name} className="w-24 h-24 md:w-32 md:h-32 object-cover md:mx-0" />
          <div className="md:ml-4 mt-2 md:mt-0">
            <h3 className="text-lg font-semibold">{cartItem.name}</h3>
            <p className="text-sm">Description: {cartItem.description}</p>
            <p className="text-sm">Price: {cartItem.price}</p>
            <p className="text-sm">Category: {cartItem.category}</p>
          </div>
          <button onClick={() => remove(cartItem)} className="bg-red-500 text-white rounded-full px-4 py-1 mt-4 md:mt-0">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
