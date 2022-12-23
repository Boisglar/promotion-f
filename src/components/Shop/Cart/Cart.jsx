import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../Features/cart.slice';
import CartItem from './CartItem';
import styles from './Cart.module.scss'

const Cart = () => {
    const products = useSelector((state) => state.cart.productId)
    const goods = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    let array = []
    let sum = 0
    let counter = 0

    for (let index = 0; index < goods.length; index++) {
        for (let i = 0; i < products.length; i++) {
            if (goods[index]._id === products[i].productId) {
                array.push(goods[index])
                sum = sum + (goods[index].price * products[i].count)
                counter = counter + products[i].count
            }
        }
    }

    return (
        <div className={styles.cart}>
            {array.map((element, index) => <CartItem product={element} key={index}/>)}
            <div className="sum_table">
                <div className={styles.title}>Сумма заказа</div>
                <div className={styles.price_item}>Итого: {sum} ₽</div>
                <div className={styles.topay}>К оплате:
                    <div className={styles.sum}>{sum} ₽</div>
                </div>
                <button className={styles.pay}>Купить({counter})</button>
            </div>
        </div>
    );
};

export default Cart;