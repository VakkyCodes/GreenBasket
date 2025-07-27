import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div 
      className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
            <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
          </div>
        </div>

        {/* Nutrition Info */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Nutrition Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(product.nutrition).map(([key, value]) => (
              <span
                key={key}
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
              >
                {key.replace('_', ' ')}: {value}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
