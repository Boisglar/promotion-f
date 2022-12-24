import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../features/newsSlice";
import "../newsGet/NewsGet.css";

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
            <a href="#">Последние</a>
            <a href="#">Обсуждаемые</a>
            <a href="#">Популярные</a>
        </div>
      </div>
      <div className="outputNews">

        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>

        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
        <div className="cardNews">
            <img
            width={"100%"}
              src="https://new.m-1global.com/upload//000/u3/5a/e9/70dbc7f5.jpg"
              alt=""
            />
          <div className="heading-news">
            Прямая трансляция спортивного турнира «ММА Серия – 17: Blacksmith»
            пройдет на телеканале M-1 Global
          </div>
        </div>
        
      </div>
    </div>
  );
}
