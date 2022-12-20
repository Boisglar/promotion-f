import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, registration } from '../../features/auth.slice';

const Registration = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleReg = () => {
        dispatch(registration({ email, password }))
    }

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleReg}>ADD USER</button>
            <button onClick={handleLogin}>LOGIN</button>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    );
};

export default Registration;