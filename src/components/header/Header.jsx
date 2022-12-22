import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.scss'
import image from "../header/LOGO.png"

export default function Header() {
  return (
    <div className={styles.header}>
        <img src={image} className={styles.image}/>
        <ul className={styles.list}>
            <li className={styles.li}>О нас</li>
            <li className={styles.li}>Турниры</li>
            <li className={styles.li}>Бойцы</li>
            <li className={styles.li}>Новости</li>
            <li className={styles.li}>Магазин</li>
            {/* <NavLink to='/o nas' className={styles.link}>О нас</NavLink>
            <NavLink to='/turnirs' className={styles.link}>Турниры</NavLink>
            <NavLink to='/boytsy' className={styles.link}>Бойцы</NavLink>
            <NavLink to='/news' className={styles.link}>Новости</NavLink>
            <NavLink to='/mag' className={styles.link}>Магазин</NavLink> */}
        </ul>
        {/* <div>
            Меню
        </div> */}
    </div>
  )
}
