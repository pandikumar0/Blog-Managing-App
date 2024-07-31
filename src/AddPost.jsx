import React, { useState, useEffect } from 'react'
import { format } from "date-fns";

const AddPost = ({posts, setPosts}) => {

  function addToPost(title, content) {
    var id = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    var dt = format(new Date(), "MMMM dd, yyyy pp");

    let post = { id: id, title: title, content: content, datetime: dt,subtitle:subTitle, imgURL: URL};
    let posted = [...posts, post]
    setPosts(posted);
    console.log(posted)
    localStorage.setItem('Data', JSON.stringify(posted));
  }

    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [URL, setURL] = useState("")

    function createNewPost(e){
        e.preventDefault();
        addToPost(title, content);
        setTitle("")
        setContent("")
        setSubTitle("")
        setURL("")
    }

  return (
    <form className='post-form' onSubmit={createNewPost}>

        <h1>Create Your New Post with Us!</h1><br />

        <label htmlFor="title"><h4>Feed your Post Title</h4></label><br />
        <input type="text" id="title" className='col-6' placeholder='Title of your post..' required value={title} onChange={(e) => setTitle(e.target.value)}/><br /><br />

        <label htmlFor="sub-title"><h4>Feed some subtitle</h4></label><br />
        <input type="text" id="sub-title" className='col-6' placeholder='Sub-Title of your post..' required value={subTitle} onChange={(e) => setSubTitle(e.target.value)}/><br /><br />

        <label htmlFor="content"><h4>Describe your Post!</h4></label><br />
        <textarea id="content" className='col-6' rows="5" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br /><br />

        <label htmlFor="img"><h4>Add more stuff</h4></label><br />
        <input type="text" id="img" className='col-6' placeholder='Share img-url of your post..' required value={URL} onChange={(e) => setURL(e.target.value)}/><br /><br />

        <button type="submit" className="btn btn-primary mb-2">Post Now!</button>
        <br />
    </form>
  )
}

export default AddPost;