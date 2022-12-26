import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProduct } from "../../features/product.slice";
import { addToCart } from "../../features/cart.slice";
import styles from "./Product.module.scss";
import img2 from "./photo/basket.png";
const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>loading</div>;
  }

  const handleAddCart = (id) => {
    dispatch(addToCart(id));
};

  return (
    <div className={styles.main_page}>
      <div className={styles.item_header}>
        <div className={styles.item_name}>
          <div>{product.name}</div>
        </div>
        <div className={styles.basket_cart}>
          <NavLink to="/cart">
            <div className={styles.basket_div}>
              <img className={styles.basket} onClick={() => handleAddCart(product._id)} src={img2} alt="" />
            </div>
          </NavLink>
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
        <div className={styles.product_main}>
          <div className={styles.product_info}>
            <h3>Модель</h3>
            <div>{product.model}</div>
          </div>
          <div className={styles.product_info}>
            <p>Состав:{product.composition}</p>
          </div>
          <div className={styles.product_info}>
            <p>Цвет:{product.color}</p>
          </div>
          <div className={styles.product_info}>
            <h2 className={styles.descript_item}>Описание товара</h2>
            <div>{product.description}</div>
          </div>
        </div>
        <div className={styles.cart_item}>
          <div className={styles.price_item}>Цена:{product.price}</div>
          <button className={styles.cart_btn}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
