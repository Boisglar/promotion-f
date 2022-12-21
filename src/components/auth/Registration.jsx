import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../features/auth.slice';

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
        <div>
            <input type="text" placeholder='Имя' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder='Фамилия' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleReg}>ADD USER</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Registration;