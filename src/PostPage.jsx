import React from 'react'
import Post from './Post'
import { useNavigate } from 'react-router-dom'
const PostPage = ({posts, setPosts}) => {

  const navigation =  useNavigate()
  function navigateToPost(id){
    navigation("/postpage/post/"+id)
  }
  return (
    <ul className='post'>
        {posts.map((val)=>{
            return(
            <li onClick={()=>navigateToPost(val.id)} key = {val.id}>
                <h2>{val.title}</h2>
                <h4>{val.datetime}</h4>
                <p>{val.subtitle}</p>
            </li>
        )
        })}
    </ul>
  )
}

export default PostPage