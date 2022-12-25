import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../features/product.slice";
import styles from './AddProduct.module.scss';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [composition, setComposition] = useState("");

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleModel = (e) => {
    setModel(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleComposition = (e) => {
    setComposition(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        image,
        name,
        model,
        price,
        size,
        description,
      })
    );
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.form_text}>Добавление нового товара</h1>
        <form className={styles.form}>
          <div className={styles.form_group}>
            <label>Наименование</label>
            <input
              className={styles.form_input}
              type="text"
              value={name}
              onChange={(e) => handleName(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label>Модель</label>
            <input
              className={styles.form_input}
              type="text"
              value={model}
              onChange={(e) => handleModel(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label form="input_model">Цвет</label>
            <input
              className={styles.form_input}
              type="text"
              value={color}
              onChange={(e) => handleColor(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label form="input_model">Цена</label>
            <input
              className={styles.form_input}
              type="number"
              placeholder=""
              value={price}
              onChange={(e) => handlePrice(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label form="input_model">Размер</label>
            <input
              className={styles.form_input}
              type="text"
              value={size}
              onChange={(e) => handleSize(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label form="input_model">Состав</label>
            <input
              className={styles.form_input}
              type="text"
              value={composition}
              onChange={(e) => handleComposition(e)}
            />
          </div>
          <div className={styles.form_group}>
            <textarea
              className={styles.form_textarea}
              type="text"
              placeholder="Введите текст"
              onChange={(e) => handleDescription(e)}
            />
          </div>
          <div className={styles.form_group}>
            <label form="input_model">Добавить фото</label>
            <input
              className={styles.img_input}
              type="file"
              placeholder=""
              name="image"
              onChange={(e) => handleImage(e)}
            />
          </div>

          <button className={styles.add_btn} onClick={(e) => handleAdd(e)}>
            добавить товар
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
