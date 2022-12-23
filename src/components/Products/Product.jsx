import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, useParams } from "react-router-dom";
import { getProduct } from "../../features/product.slice";
import styles from "../Products/product.module.css";
import img2 from "./photo/basket.png";
import Cart from "../Cart/Cart";

const Product = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.cart.active);
  const product = useSelector((state) => state.products.product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct("63a4ef5825057ac2e4584bd1"));
  }, [dispatch, id]);

  if (!product) {
    return <div>loading</div>;
  }

  return (
    <>
      <div className={styles.item_header}>
        <div className={styles.item_name}>
          <div>{product.name}</div>
        </div>
        <div className={styles.basket_cart}>
          <img className={styles.basket} src={img2} alt="" onClick />
          {active && <Cart />}
        </div>
      </div>

      <div className={styles.card_item}>
        <div>
          <img
            className={styles.img}
            data-title="Перейти к товару"
            src={`http://localhost:4000/${product.image}`}
            alt=""
          />
        </div>
        <div>
          <div>
            <h3>Модель</h3>
            <div>{product.model}</div>
          </div>
          <div>
            <p>Состав:{product.composition}</p>
          </div>
          <div>
            <p>Цвет:{product.color}</p>
          </div>
          <div>
            <h2 className={styles.descript_item}>Описание товара</h2>
            <div>{product.description}</div>
          </div>
        </div>
        <div className={styles.cart_item}>
          <div className={styles.price_item}>Цена:{product.price}</div>
          <button className={styles.cart_btn}>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
};

export default Product;
