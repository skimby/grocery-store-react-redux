import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCount } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  // const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();


  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(item.id))
  }

  const incrementCount = (e) => {
    e.preventDefault();
    dispatch(updateCount(item.id, count + 1));
  }
  const decrementCount = (e) => {
    e.preventDefault();
    dispatch(updateCount(item.id, count - 1));
  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  // useEffect(() => {
  // }, [cart])

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="cart-item-button"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={decrementCount}

        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
