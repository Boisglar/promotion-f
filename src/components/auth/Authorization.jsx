import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logout, modalState } from '../../Features/auth.slice';
import styles from './Authorization.module.css'
import LoginForm from './LoginForm';
import Registration from './Registration';

const Authorization = () => {
    const isAuth = useSelector((state) => state.users.isAuth)
    const user = useSelector((state) => state.users.user)
    const [registration, setRegistration] = useState(true)
    const dispatch = useDispatch()


    useEffect(() => {
      if (localStorage.getItem('token')) {
        dispatch(checkAuth())
      }
    }, [dispatch])
    
    const handleLogout = () => {
        dispatch(logout())
    }

    const handleModal = () => {
      dispatch(modalState())
    }

    return (
      <div className={styles.wrapper}>
          <div className={styles.top_div} onClick={handleModal}></div>
          <div className={styles.middle_main}>
            <div className={styles.middle_div} onClick={handleModal}></div>
              <div className={styles.main_div}>
              {!isAuth && registration && <LoginForm/>}
              {!isAuth && !registration && <Registration/>}
              {!isAuth && registration && <div className={styles.sub}>Если нет аккаунта,<div onClick={() => setRegistration(!registration)} className={styles.sub_word}> Зарегистрируйтесь</div></div>}
              {!isAuth && !registration && <div className={styles.sub}>Если уже есть аккаунт,<div onClick={() => setRegistration(!registration)} className={styles.sub_word}> Ввойдите</div></div>}
              {isAuth && 
                <div className={styles.logout}>
                  <div className={styles.user}>Добро пожаловать, {user.firstName}</div>
                  {!user.isActivated && <div className={styles.error}>Ваш аккаунт не активирован</div>}
                  <button onClick={() => handleLogout()} className={styles.button_log}>ВЫЙТИ</button>
                </div>
                }
            </div>
            <div className={styles.middle_div} onClick={handleModal}></div>
          </div>
          <div className={styles.bottom_div} onClick={handleModal}></div>
        </div>
    );
};

export default Authorization;