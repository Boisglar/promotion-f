import React from 'react';
import { useDispatch } from 'react-redux';
import { usersState } from '../../../Features/auth.slice';
import $api from '../../../Features/http';

const User = ({firstName, lastName, roles, id}) => {
    const dispatch = useDispatch()
    const handleManager = async () => {
        const res = await $api.post('/makemanager', {id})
        dispatch(usersState(res.data))
    }
    return (
        <div>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{roles}</li>
                <li>
                    <button onClick={handleManager}>Сделать менеджером</button>
                </li>
            </ul>
        </div>
    );
};

export default User;