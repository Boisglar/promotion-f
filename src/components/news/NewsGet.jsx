import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function NewsGet() {
  
const news = useSelector((state) => state.news.news)
const loading = useSelector((state) => state.loading)
const error = useSelector((state) => state.error)
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(NewsGet())
}, [dispatch])

if(loading) {
  return <h3>....LOADIND</h3>
}
if (error) {
  return <h3>ERROR:</h3>
}

  return (
    <div>
      {news.map((item)=>{
        return(
         <div key={item._id}>
            <h3>{item.header}</h3>
            <img src={item.image} alt="" />
            <div> 
                <ul>
                    <li>{item.text}</li>
                </ul>
            </div>
        </div> 
        )
      })}
    </div>
  )
}
