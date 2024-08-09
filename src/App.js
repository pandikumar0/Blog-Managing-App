import React, { useEffect } from "react";
import { useState } from "react";
import PostPage from "./PostPage";
import Footer from "./Footer";
import AddPost from "./AddPost";
import About from "./About.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import PostData from "./PostData.jsx";
import Post from "./Post.jsx";
import Manage from "./Manage.jsx";
import EditPost from "./EditPost.jsx";
import axiosAPI from "./axiosAPI.js";

const App = () => {
  var data = PostData;
  const [search, setSearch] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //let psts = localStorage.getItem("Data");
    async function load_on_page() {
      try {
        let psts = await axiosAPI.get("/posts");
        if (psts) {
          setPosts(psts.data);
        } else {
          setPosts(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    load_on_page();
  }, []);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <PostPage
              posts={
                search.length > 0
                  ? posts.filter((each_post) =>
                      each_post.title.toLowerCase().includes(search)
                    )
                  : posts
              }
              setPosts={setPosts}
            />
          }
        />
        <Route
          path="/addpost"
          element={<AddPost posts={posts} setPosts={setPosts} />}
        />
        <Route path="/postpage/post/:id" element={<Post posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/manage"
          element={<Manage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/manage/editpost"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
