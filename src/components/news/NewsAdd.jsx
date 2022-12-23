import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function NewsAdd() {
  const dispatch = useDispatch()
  // const loading = useSelector((state) => state.loading)
  // const error = useSelector((state) => state.error)

const [header, setHeader] = useState('');
const [image, setImage] = useState('')
const [text, setText] = useState('')


const handelePostNews = () => {
  dispatch(NewsAdd({header, image, text}))
}


  return (
    <div className = "post-news">
        <ul>
            <div className = "Header"><input type="text" value={header} onChange = {(e)=> setHeader(e.target.value)} /></div>
            <div className = "image"><input type="text" value={image} onChange = {(e)=>setImage(e.target.value)}/></div>
            <div> <textarea name="comment" value={text} onChange={(e)=> setText(e.target.value)}></textarea> </div> 
            <button onClick={()=>handelePostNews()}> Добавить новость </button>
        </ul>
    </div>
  )
}
