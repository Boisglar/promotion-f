import React from "react";
import { Link } from "react-router-dom";

export default function NewsCart({ image, heading, _id }) {
  return (
    <Link to={`/news/${_id}`}>
      <div className="cardNews" >
        <img
          width={"100%"}
          src={`http://localhost:4000/${image}`}
          alt="news-image"
        />
        <div className="heading-news">{heading}</div>
      </div>
    </Link>
  );
}
