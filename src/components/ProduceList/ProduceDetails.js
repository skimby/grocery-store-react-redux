import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";


function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();


  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addToCart(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handleAdd}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
