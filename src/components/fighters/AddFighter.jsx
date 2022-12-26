import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postFighter } from '../../Features/fighters.slice';
import { getWeightCategories } from '../../Features/weightCategories.slice';
import styles from './AddFighter.module.css'

const AddFighter = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [height, setHeight] = useState('')
    const [win, setWin] = useState('')
    const [draw, setDraw] = useState('')
    const [loss, setLoss] = useState('')
    const [alias, setAlias] = useState('')
    const [img, setImg] = useState(null)
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    let image = ''
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWeightCategories())
    }, [dispatch])

    const categories = useSelector((state) => state.wCategories.weightCategories)

    const addFighter = async () => {
        try {
            const data = new FormData()
            data.append('avatar', img)
            await axios.post('http://localhost:4000/image', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(res => image = res.data)
            dispatch(postFighter({ firstName, lastName, alias, age, height, win, draw, loss, image, weight }))
            setFirstName('')
            setLastname('')
            setAlias('')
            setAge('')
            setWin('')
            setDraw('')
            setLoss('')
            setHeight('')
            setImg(null)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.item}>Имя: <input type="text" placeholder='  Имя' value={firstName} onChange={(e) => setFirstName((x) => e.target.value)} className={styles.input} /></div>
            <div className={styles.item}>Фамилия: <input type="text" placeholder='  Фамилия' value={lastName} onChange={(e) => setLastname((x) => e.target.value)} className={styles.input}/></div>
            <div className={styles.item}>Псевдоним: <input type="text" placeholder='  Псевдоним' value={alias} onChange={(e) => setAlias((x) => e.target.value)} className={styles.input}/></div>
            <div className={styles.item}>Возраст: <input type="text" value={age} onChange={(e) => setAge((x) => e.target.value)} className={styles.input}/></div>
            <div className={styles.item}>Весовая категория:
                <select value={weight} onChange={(event) => setWeight((x) => event.target.value)} className={styles.input}>
                    <option></option>
                    {categories.map((item) => <option value={item._id}>{item.name}</option>)}
                </select>
            </div >
            <div className={styles.item}>Рост: <input type="text" placeholder='  Рост' value={height} onChange={(e) => setHeight((x) => e.target.value)} className={styles.input}/></div>
            <div className={styles.item}>Победы: <input type="text" value={win} onChange={(e) => setWin((x) => e.target.value)} className={styles.input}/></div>
            <div  className={styles.item}>Ничьи: <input type="text" value={draw} onChange={(e) => setDraw((x) => e.target.value)} className={styles.input}/></div>
            <div className={styles.item}>Поражения: <input type="text" value={loss} onChange={(e) => setLoss((x) => e.target.value)} className={styles.input} /></div>
            <div className={styles.item}>Фотография: <input type="file" name="image" onChange={(e) => setImg((x) => e.target.files[0])} className={styles.image}/></div>
            <button onClick={() => addFighter()} className={styles.button}>Добавить</button>
        </div>
    );
};

export default AddFighter;