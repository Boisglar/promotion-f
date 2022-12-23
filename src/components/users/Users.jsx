import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersState } from '../../features/auth.slice';
import $api from '../../features/http';
import User from './User';

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.allUsers)

    const handleUsers = async () => {
        const res = await $api.get('/users')
        dispatch(usersState(res.data))
    }
    return (
        <div>
            <button onClick={handleUsers}>Получить всех пользователей</button>
            {users && users.map((item, index) => <User
            firstName={item.firstName}
            lastName={item.lastName}
            roles={item.roles}
            key={index}
            id={item._id}
            />)}
        </div>
    );
};

export default Users;