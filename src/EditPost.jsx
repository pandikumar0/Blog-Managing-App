// import React, { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';

// const EditPost = ({posts, setPosts}) => {
//     const navigation = useNavigate();
//     const location = useLocation();
//     const [title,setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [subTitle, setSubTitle] = useState("");
//     const [URL, setURL] = useState("");

//     const data = location.state || 'No data passed';

//     if(data=='No data passed')
//         return (<h1>Data Not passed properly</h1>)

//     setTitle(data.title);
//     setContent(data.content);
//     setSubTitle(data.subtitle);
//     setURL(data.imgURL);
//     const id = data.id;

//     function editOnPost(){

//         const updated= posts.map((post)=>{
//             if(post.id == id){
//                 return {...post, title:title, content: content, subtitle:subTitle, imgURL: URL};
//             }
//             return post
//         });

//         console.log(updated);
//         setPosts(updated);
//     }

//     function editPost(e){
//         e.preventDefault();
//         editOnPost();
//         setTitle("")
//         setContent("")
//         setSubTitle("")
//         setURL("")
//         navigation("/manage");
//     }

//   return (
//     <form className='post-form' onSubmit={editPost}>

//         <h1>Create Your New Post with Us!</h1><br />

//         <label htmlFor="title"><h4>Feed your Post Title</h4></label><br />
//         <input type="text" id="title" className='col-6' placeholder='Title of your post..' required value={title} onChange={(e) => setTitle(e.target.value)}/><br /><br />

//         <label htmlFor="sub-title"><h4>Feed some subtitle</h4></label><br />
//         <input type="text" id="sub-title" className='col-6' placeholder='Sub-Title of your post..' required value={subTitle} onChange={(e) => setSubTitle(e.target.value)}/><br /><br />

//         <label htmlFor="content"><h4>Describe your Post!</h4></label><br />
//         <textarea id="content" className='col-6' rows="5" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br /><br />

//         <label htmlFor="img"><h4>Add more stuff</h4></label><br />
//         <input type="text" id="img" className='col-6' placeholder='Share img-url of your post..' required value={URL} onChange={(e) => setURL(e.target.value)}/><br /><br />

//         <button type="submit" className="btn btn-primary mb-2">Post Now!</button>
//         <br />
//     </form>
//   )
// }

// export default EditPost
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, setPosts }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [URL, setURL] = useState("");

    useEffect(() => {
        const data = location.state || {};
        if (data) {
            setTitle(data.title || "");
            setContent(data.content || "");
            setSubTitle(data.subtitle || "");
            setURL(data.imgURL || "");
        }
    }, [location.state]);

    function editOnPost() {
        const id = location.state?.id;
        const updated = posts.map((post) => {
            if (post.id === id) {
                return { ...post, title, content, subtitle: subTitle, imgURL: URL };
            }
            return post;
        });

        setPosts(updated);
    }

    function editPost(e) {
        e.preventDefault();
        editOnPost();
        navigation("/manage");
    }

    return (
        <form className='post-form' onSubmit={editPost}>
            <h1>Edit Your Post</h1><br />
            <label htmlFor="title"><h4>Feed your Post Title</h4></label><br />
            <input type="text" id="title" className='col-6' placeholder='Title of your post..' required value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
            <label htmlFor="sub-title"><h4>Feed some subtitle</h4></label><br />
            <input type="text" id="sub-title" className='col-6' placeholder='Sub-Title of your post..' required value={subTitle} onChange={(e) => setSubTitle(e.target.value)} /><br /><br />
            <label htmlFor="content"><h4>Describe your Post!</h4></label><br />
            <textarea id="content" className='col-6' rows="5" value={content} onChange={(e) => setContent(e.target.value)}></textarea><br /><br />
            <label htmlFor="img"><h4>Add more stuff</h4></label><br />
            <input type="text" id="img" className='col-6' placeholder='Share img-url of your post..' required value={URL} onChange={(e) => setURL(e.target.value)} /><br /><br />
            <button type="submit" className="btn btn-primary mb-2">Update Post</button>
        </form>
    );
};

export default EditPost;
