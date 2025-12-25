import React from 'react'

const ProductCart = ({cart, removeFromCart}) => {
  if(cart.length === 0) {
    return <p className="text-center mt-8">Your cart is empty!</p>
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((product, index) => (
        <li key={index} 
          className="flex items-center justify-between p-4 bg-white rounded shadow">
         <div className="flex items-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />

              <div>
                <span className="font-semibold text-gray-800">{product.name}</span>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
              </div>
          </div>
          <div>
            <button onClick={() => removeFromCart(product.id)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        </li>))}
      </ul>
      <button className='bg-black text-pink-500 p-3 float-end my-10'>Continue</button>
    </div>
  );
}



export default ProductCart
