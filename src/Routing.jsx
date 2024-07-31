import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddPost from './AddPost'
import Post from './Post'
import About from './About'
import PostPage from './PostPage'


const Routing = () => {
    return(
        <Routes>
        <Route path="/" element={<PostPage/>}/>
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/postpage" element={<PostPage />}/>
        <Route path="/postpage/post/:id" element={<Post />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
    )
}

export default Routing;