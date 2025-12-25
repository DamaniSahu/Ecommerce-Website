import React from 'react'
import Products from '../data/Products.json'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = ({ addToCart }) => {
    const {id} = useParams();
    const product = Products.find((p) => p.id === parseInt(id));

    if(!product) {
        return <p>Product not found!</p>;
    }

  return (
    <div className='p-6 bg-gray-100  border-2'>
      <div className="bg-white p-6 rounded shadow-md text-center">
       <img
              src={product.img}
              alt={product.name}
              className="w-full max-h-80 object-contain rounded mb-4"
            />
      <h1 className='text-2xl font-bold my-4'>{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-gray-900 mb-4">Price: ${product.price}</p>
      <button onClick={() => addToCart(product)} 
      className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"'>
        Add to Cart
      </button>
      </div>
      
    </div>
  );
};

export default ProductDetailsPage
