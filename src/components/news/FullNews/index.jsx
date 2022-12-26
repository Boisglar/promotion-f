import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NewsFull.css";
import { useParams } from "react-router-dom";
import { getNews } from "../../../Features/newsSlice";
import { addComments, getComments } from "../../../Features/comment.slice";

function NewsFull() {
  const { id } = useParams();

  const [commentText, setCommentText] = useState('')

  const news = useSelector((state) => state.news.news).find(
    (item) => item._id === id
  );
  const comments = useSelector((state) => state.comments.comments)?.filter((item) => item.newsId === id);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getNews());
    dispatch(getComments());
  }, [dispatch]);

  const handleAddComment = () => {
    if(commentText !== "") {
      return dispatch(addComments({commentText, id, author: '63a2cfa6875fe9d82d3af070'})), setCommentText("")
    }
    return false
  }

  if (!news) {
    return "Loading...";
  }

  return (
    <div className="newsFull">
      <div>
        <h1>{news.heading}</h1>
        <div>
          <img
            src={`http://localhost:4000/${news.image}`}
            alt=""
            width={"500px"}
          />
        </div>
        <div className="text">
          <span>{news.text}</span>
        </div>
      </div>

      <h6 className="comment-header">Все комменты: {comments.length}</h6>

      <div>
        {comments.length ? comments.map((item) => {
          return (
            <div className="comment-item">
              <div className="comment">
                <p className="author">{item.author.firstName}</p>
                <p>{item.text}</p>
              </div>
            </div>
          );
        }).reverse() : (<div>No comments</div>)}
      </div>

      <div className="add-comment-item">
        <h4>Добавить комментарий</h4>
        <div className="add-comment">
          <textarea name="text" id="comment" cols="30" rows="10" value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
          <button className="button" onClick={() => handleAddComment()}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default NewsFull;
