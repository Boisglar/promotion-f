import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../features/auth.slice";
import styles from './Authorization.module.css'

const LoginForm = () => {
    const dispatch = useDispatch()
    const error = useSelector((state) => state.users.error)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }
    return (
        <div className={styles.login_form}>
            <h2 className={styles.title}>Введите логин и пароль</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
            <button onClick={handleLogin} className={styles.button_log}>ВОЙТИ</button>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default LoginForm;