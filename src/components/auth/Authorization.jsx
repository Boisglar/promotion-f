import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logout } from '../../features/auth.slice';
import LoginForm from './LoginForm';
import Registration from './Registration';

const Authorization = () => {
    const isAuth = useSelector((state) => state.users.isAuth)
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

    return (
        <div>
            {!isAuth && registration && <LoginForm/>}
            {!isAuth && !registration && <Registration/>}
            {!isAuth && registration && <div>Если нет аккаунта, <div onClick={() => setRegistration(!registration)}>Зарегистрируйтесь</div></div>}
            {!isAuth && !registration && <div>Если уже есть аккаунт, <div onClick={() => setRegistration(!registration)}>Ввойдите</div></div>}
            {isAuth && <button onClick={() => handleLogout()}>LOGOUT</button>}
        </div>
    );
};

export default Authorization;