import React from 'react'
import { useParams } from 'react-router-dom'

const Post = ({posts}) => {
  const {id} = useParams();
  const postRequired = posts.filter((x)=> x.id == id)[0];
  return (
    <div className='in-post'>
        <h2>{postRequired.title}</h2><hr className='col-10'/>
        <h4>{postRequired.datetime}</h4>
        <h5>{postRequired.subtitle}</h5>
        <section className='inpost-section'>
        <p>{postRequired.content}</p>
        <img src={ postRequired.imgURL} alt="imag-
        not-shown" />
        </section>
    </div>
  )
}

export default Post;