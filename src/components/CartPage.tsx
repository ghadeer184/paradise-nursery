import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="cart-page min-h-screen bg-gradient-to-b from-mint-50 to-mint-100">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary-dark">Your Cart</h2>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                Your cart is empty
              </h3>
              <p className="text-gray-500">
                Add some beautiful plants to get started!
              </p>
            </div>
          ) : (
            cart.map((item: CartItem) => (
              <div 
                key={item.id}
                className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-0"
              >
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-dark">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      className="btn btn-icon btn-sm"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="btn btn-icon btn-sm"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-primary-dark mb-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button 
              className="btn btn-primary btn-lg hover-up"
              onClick={() => setIsModalOpen(true)}
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div 
          className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Checkout
            </h3>
            <p className="text-gray-600 mb-6">Coming Soon</p>
            <button 
              className="btn btn-primary transition-all hover-scale"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;