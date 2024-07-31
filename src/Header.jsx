import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = ({search, setSearch}) => {
  return (
      <nav>
        <p>Bloggy</p>
        <form className="search-form">
          <input
            className="searchbox"
            id="search"
            value={search}
            placeholder="Looking for a post?.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch type="button" className="s-icon" />
        </form>
        <ul>
          <li>
            <Link to="/" className='links'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='links'>About</Link>
          </li>
          <li>
            <Link to="/addpost" className='links'>Create New Post</Link>
          </li>
          <li>
            <Link to="/manage" className='links'>Manage</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header;