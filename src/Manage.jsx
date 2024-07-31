import React from 'react'
import {  useNavigate } from 'react-router-dom';

const Manage = ({posts, setPosts}) => {
    const nav =useNavigate();

    function handleDelete(id){
        const filteredItems = posts.filter((x) => x.id != id)
        setPosts(filteredItems);
        localStorage.setItem("Data", JSON.stringify(filteredItems));
    }
    function navigateToPage(id){
        nav("/postpage/post/"+id);
    }

    function handleEdit(post){
        nav("/manage/editpost", {state: post});
       
    }
  return (
    <ol className='manage-post'>
    {posts.map((post) => {
        return (
        <li key={post.id}>
        <u><h5 onClick={()=>navigateToPage(post.id)}>{post.title}</h5></u>
        <div>
        <button  className='btn btn-success' onClick={(e) => handleEdit(post)}>Edit</button>
        <button  className='btn btn-danger' onClick={(e) => handleDelete(post.id)}>Delete</button>
        </div>
        </li>
        )
    })}
    </ol>
  )
}

export default Manage