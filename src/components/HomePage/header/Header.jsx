import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import image from "../header/LOGO.png"
import login from './login.png'
import Authorization from '../../auth/Authorization';
import { useDispatch, useSelector } from 'react-redux'
import { modalState } from '../../../features/auth.slice';
export default function Header() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.users.isAuth)
  const modal = useSelector((state) => state.users.modal)
  const user = useSelector((state) => state.users.user)

  const handleActive = () => {
    dispatch(modalState())
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = modal ? 'hidden' : 'auto';
  }, [modal])

  return (
    <>
      {modal && <Authorization/>}
      <div className={styles.header}>
          <NavLink to={'/'}><img src={image} className={styles.image} alt={'fighter'}/></NavLink>
          <ul className={styles.list}>
              <li className={styles.li}><NavLink to={'/about'}>О нас</NavLink></li>
              <li className={styles.li}><NavLink></NavLink>Турниры</li>
              <li className={styles.li}>Бойцы</li>
              <li className={styles.li}><NavLink to={'/news'}>Новости</NavLink></li>
              <li className={styles.li}><NavLink to={'/shop'}>Магазин</NavLink></li>  
          </ul>
          <div className={styles.login}>
            {isAuth && user.roles.includes('ADMIN') && <div className={styles.admin}><NavLink to={'/admin'}>Администрирование</NavLink></div>}
            <img src={login} alt="Авторизация" className={styles.login_img} onClick={handleActive}/>
            </div>
      </div>
    </>
  )
}
