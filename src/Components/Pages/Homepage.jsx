import React from "react";
import Products from "../data/Products.json";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className=" mx-auto p-4 bg-red-300">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Products.map((product) => (
          <div key={product.id} className="pb-2 border border-pink-50 rounded text-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-30 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 no-underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
