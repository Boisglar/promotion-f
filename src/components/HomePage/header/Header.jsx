import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import image from "../header/LOGO.png"

export default function Header() {
  return (
    <div className={styles.header}>
        <NavLink to={'/'}><img src={image} className={styles.image} alt={'fighter'}/></NavLink>
        <ul className={styles.list}>
            <li className={styles.li}><NavLink to={'/about'}>О нас</NavLink></li>
            <li className={styles.li}><NavLink></NavLink>Турниры</li>
            <li className={styles.li}>Бойцы</li>
            <li className={styles.li}><NavLink to={'/news'}>Новости</NavLink></li>
            <li className={styles.li}><NavLink to={'/shop'}>Магазин</NavLink></li>
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
