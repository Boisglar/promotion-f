import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img2 from "./photo/basket.png";
import {
  getProducts,
  setSearchText,
  searching,
} from "../../features/product.slice";
import { NavLink } from "react-router-dom";
import styles from "./Shop.module.scss";
import { cartState } from "../../features/cart.slice";
import { addToCart } from "../../features/cart.slice";

const Shop = (product) => {
  const active = useSelector((state) => state.cart.active);
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.products.products);
  const [search, setSearch] = useState("");

  const handleCart = () => {
    dispatch(cartState(!active));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearchResult = () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddCart = (id) => {
      dispatch(addToCart(id));
  };

  dispatch(setSearchText(search));

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.main_text}>Большой выбор ассортимента</h1>
        <div className={styles.search_form}>
          <input
            className={styles.search_inp}
            type="text"
            placeholder="Поиск..."
            onChange={(e) => handleSearch(e)}
          />
          <button
            className={styles.search_btn}
            onClick={() => dispatch(searching())}
          >
            Искать
          </button>
          <button
            className={styles.search_btn}
            onClick={handleClearSearchResult}
          >
            Сброс
          </button>
          <NavLink to="/cart">
            <div className={styles.basket_div}>
              <img
                className={styles.basket}
                src={img2}
                alt=""
                onClick={handleCart}
              />
            </div>
          </NavLink>
        </div>
      </div>
      <div className={styles.product}>
        {goods.map((product) => {
          return (
            <React.Fragment key={product._id}>
              <div className={styles.main_card}>
                <NavLink to={`/product/${product._id}`}>
                  <img
                    className={styles.img}
                    data-title="Перейти к товару"
                    src={`http://localhost:4000/${product.image}`}
                    alt=""
                  />
                  </NavLink>
                <div className={styles.product_item}>{product.price}</div>
                <div className={styles.product_item}>{product.name}</div>
                <div className={styles.product_item}>{product.model}</div>
                <div className={styles.hover_btn}>
                  <button
                    className={styles.item_btn}
                    onClick={() => handleAddCart(product._id)}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
