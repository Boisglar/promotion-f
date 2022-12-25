import React, { useState } from 'react';
import AddFighter from "./fighters/AddFighter";
import PostNews from "./news/PostNews"
import AddProduct from './Shop/AddProduct';

const Admin = () => {
    const [fighter, setFighter] = useState(false)
    const [news, setNews] = useState(false)
    const [prod, setProd] = useState(false)

    const handleFighter = () => {
        setFighter(true)
        setNews(false)
        setProd(false)
    }

    const handleNews = () => {
        setNews(true)
        setFighter(false)
        setProd(false)
    }

    const handleProd = () => {
        setProd(true)
        setNews(false)
        setFighter(false)
    }

    return (
        <div>
            <div>
                <button onClick={handleFighter}>Добавить бойца</button>
                <button onClick={handleNews}>Добавить новость</button>
                <button onClick={handleProd}>Добавить товар</button>
            </div>
            <div>
                {prod && <AddProduct/>}
                {news && <PostNews/>}
                {fighter && <AddFighter/>}
            </div>
        </div>
    );
};

export default Admin;