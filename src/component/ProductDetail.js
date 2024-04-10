import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.productId === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className=" max-w-4xl mx-auto">
        <div className="flex justify-center ">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-76 rounded-lg mr-4 "
          />
          <div className="flex flex-col justify-between">
            <p className="font-bold text-sky-950 text-lg">Similar Products</p>
            <img
              src={product.im1}
              alt="im"
              className="w-28 h-28 rounded-lg mb-2"
            />
            <img
              src={product.im2}
              alt="im"
              className="w-28 h-28 rounded-lg mb-2"
            />
            <img
              src={product.im3}
              alt="im"
              className="w-28 h-28 rounded-lg mb-2"
            />
          </div>
        </div>
        <div className="mt-4  text-center">
          <h2 className="text-3xl text-red-600 font-bold">{product.name}</h2>

          <p className=" mt-4 w-80 m-auto dark:text-gray-900 font-serif">
            {product.description}
          </p>
          <p className="text-sky-600 mt-4 font-bold text-2xl">
            Price: Rs.{product.price}
          </p>

          <button
            onClick={handleBack}
            className="bg-blue-500 rounded-full px-8 py-1 text-sm font-semibold text-white mr-2 focus:outline-none mb-2 mx-4"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
