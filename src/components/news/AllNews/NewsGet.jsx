import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../Features/newsSlice";
import NewsCart from "../NewsCart";
import "./NewsGet.css";

export default function NewsGet() {
  const news = useSelector((state) => state.news.news)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()

  console.log(news);

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  if(loading) {
    return <h3>....LOADIND</h3>
  }
  if (error) {
    return <h3>ERROR:</h3>
  }

  return (
    <div className="newsPages">
      <div className="headerNewsPage">
        <div className="headerNews">Новости</div>
        <div className="filterNews">
          <a className="alink" href="#">Последние</a>
          <a className="alink" href="#">Обсуждаемые</a>
          <a className="alink" href="#">Популярные</a>
        </div>
      </div>
      <div className="outputNews">
      
        {news.map((item) => <NewsCart {...item} key ={item._id}/>)}
      </div>
    </div>
  );
}
