import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '@/redux/slices/cartSlice';

export const useCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const handleUpdateQuantity = (id, quantity) => {
      if (quantity <= 0) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(updateQuantity({ id, quantity }));
      }
    };

    return {
      cartItems,
      totalPrice,
      totalQuantity,
      addToCart: (product) => dispatch(addToCart(product)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
      updateQuantity: handleUpdateQuantity,
      clearCart: () => dispatch(clearCart()),
    };
  };