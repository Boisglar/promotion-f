import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, changeCart } from "../../features/cart.slice";
import styles from "./Cart.module.scss";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.productId);
  const quantity = products.filter(
    (element) => element.productId === product._id
  );

  const handleMinus = (id, type, count) => {
    if (count >= 1) {
      dispatch(changeCart({ id, type, count }));
    }
  };

  const handlePlus = (id, type, count) => {
    if (count <= product.amount) {
      dispatch(changeCart({ id, type, count }));
    }
  };

  const handleDel = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className={styles.cart_item}>
      <div>
        <img
          className={styles.image}
          src={`http://localhost:4000/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="discription">
        <div className={styles.product}>
          <div className={styles.item_info}>
            <div className="company">{product.name}</div>
            <div className="model">{product.model}</div>
          </div>
          <div className={styles.price}>{product.price}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div>
          <button
            className={styles.delete}
            onClick={() => handleDel(product._id)}
          >
            ✕
          </button>
        </div>
        <div className={styles.quantity}>
          <button
            className={styles.button_count}
            onClick={() =>
              handleMinus(quantity[0]._id, "minus", quantity[0].count - 1)
            }
          >
            -
          </button>
          <div className={styles.counter}>{quantity[0].count}</div>
          <button
            className={styles.button_count}
            onClick={() =>
              handlePlus(quantity[0]._id, "plus", quantity[0].count + 1)
            }
          >
            +
          </button>
        </div>
        <div className={styles.amount}>
          Остаток на складе: {product?.amount}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
