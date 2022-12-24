import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../Features/auth.slice';
import styles from './Authorization.module.css'

const Registration = () => {
    const dispatch = useDispatch()
    const error = useSelector((state) => state.users.error)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleReg = () => {
        dispatch(registration({ email, password, firstName, lastName }))
    }

    return (
        <div className={styles.login_form}>
            <h2 className={styles.title_reg}>Зарегистрируйтесь</h2>
            <input type="text" placeholder='Имя' value={firstName} onChange={(e) => setFirstName(e.target.value)} className={styles.input}/>
            <input type="text" placeholder='Фамилия' value={lastName} onChange={(e) => setLastName(e.target.value)} className={styles.input}/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input}/>
            <button onClick={handleReg} className={styles.button_reg}>РЕГИСТРАЦИЯ</button>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default Registration;