import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/auth.slice';

const LoginForm = () => {
    const dispatch = useDispatch()
    const error = useSelector((state) => state.users.error)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(login({ email, password }))
    }
    return (
        <div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>LOGIN</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default LoginForm;