import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      const guestCart = localStorage.getItem('shopsmart_guest_cart');
      if (guestCart) {
        setCartItems(JSON.parse(guestCart));
      } else {
        setCartItems([]);
      }
    }
  }, [user]);

  const fetchCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5001/api/cart', {
        headers: {
          'Authorization': localStorage.getItem('token') || ''
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.items) {
          const formattedItems = data.items.map(i => ({
            id: i.productId,
            name: i.product.name,
            price: i.product.price,
            image: i.product.image,
            quantity: i.quantity,
            cartItemId: i.id
          }));
          setCartItems(formattedItems);
        } else {
          setCartItems([]);
        }
      }
    } catch (error) {
      console.error('Failed to fetch cart', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (product, quantity = 1) => {
    if (user) {
      try {
        const response = await fetch('http://localhost:5001/api/cart/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') || ''
          },
          body: JSON.stringify({ productId: product.id, quantity })
        });
        if (response.ok) {
          fetchCart();
        }
      } catch (error) {
        console.error('Failed to add to cart', error);
      }
    } else {
      const existingItem = cartItems.find(item => item.id === product.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = cartItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        updatedCart = [...cartItems, { ...product, quantity }];
      }
      setCartItems(updatedCart);
      localStorage.setItem('shopsmart_guest_cart', JSON.stringify(updatedCart));
    }
  };

  const updateQuantity = async (productId, quantity, cartItemId = null) => {
    if (quantity < 1) return;

    if (user && cartItemId) {
      try {
        const response = await fetch(`http://localhost:5001/api/cart/items/${cartItemId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') || ''
          },
          body: JSON.stringify({ quantity })
        });
        if (response.ok) {
          fetchCart();
        }
      } catch (error) {
        console.error('Failed to update quantity', error);
      }
    } else {
      const updatedCart = cartItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('shopsmart_guest_cart', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = async (productId, cartItemId = null) => {
    if (user && cartItemId) {
      try {
        const response = await fetch(`http://localhost:5001/api/cart/items/${cartItemId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': localStorage.getItem('token') || ''
          }
        });
        if (response.ok) {
          fetchCart();
        }
      } catch (error) {
        console.error('Failed to remove from cart', error);
      }
    } else {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
      localStorage.setItem('shopsmart_guest_cart', JSON.stringify(updatedCart));
    }
  };

  const mergeCart = async () => {
    const guestCart = localStorage.getItem('shopsmart_guest_cart');
    if (guestCart && user) {
      const items = JSON.parse(guestCart).map(item => ({
        productId: item.id,
        quantity: item.quantity
      }));
      
      try {
        const response = await fetch('http://localhost:5001/api/cart/merge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') || ''
          },
          body: JSON.stringify({ items })
        });
        if (response.ok) {
          localStorage.removeItem('shopsmart_guest_cart');
          fetchCart();
        }
      } catch (error) {
        console.error('Failed to merge cart', error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      mergeCart();
    }
  }, [user]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + ((item.price || 0) * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      totalItems,
      totalPrice,
      isLoading,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      mergeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
