import React from 'react'

const About = () => {
  return (
    <>
    <h1>About Us</h1>
    <hr className='col-2'/>
    <h2>Bloggy: Technical Overview of a Basic React App</h2>
    <p>

Bloggy, developed by Pandikumar K, is a front-end application built using React. This simple yet effective app focuses on core blogging functionalities, including searching for blogs, adding new entries, and managing existing posts. Utilizing React Hooks, Bloggy provides an intuitive user experience while demonstrating key React principles. Here’s a closer look at the technical aspects of Bloggy:
</p>
<ol>
<li>
<h3>Adding and Managing Blogs</h3>

The functionality to add and manage blogs is implemented through simple forms and state management:

Adding Blogs: Users can input blog content via a form, which updates the state with the new blog data. This form uses controlled components, where form inputs are linked to state variables. Upon submission, the new blog data is added to the list of blogs, and the state is updated accordingly.
Managing Blogs: Editing and deleting blogs are handled by updating the state. The edit functionality involves populating the form with existing blog data, allowing users to modify and save changes. Deleting a blog involves removing it from the state array and updating the UI to reflect the change.
</li><li>
<h3>Search Functionality</h3>

The search feature is implemented using a combination of state and filtering logic:

Search Input: A controlled input field updates the search query state as users type.
Filtering Blogs: The list of blog posts is filtered based on the search query using JavaScript’s filter method. This filtered list is then rendered dynamically, ensuring that only relevant blog posts are displayed.
</li><li>
<h3>Component Structure</h3>

Bloggy follows a modular component structure, making the codebase easier to manage and maintain:

BlogList: Displays a list of blog posts. It receives blog data and rendering logic via props and is responsible for rendering individual blog entries.
BlogForm: Manages the form for adding or editing blog posts. It includes input fields and submission handling.
SearchBar: Contains the search input field and manages the search functionality.
</li><li>
<h3>User Interface</h3>

The user interface of Bloggy is designed to be clean and intuitive. Basic CSS is used to style components, ensuring a responsive and user-friendly design. React’s component-based architecture allows for easy updates and customization of the UI as needed.
</li>
</ol>

<p>
In summary, Bloggy is a straightforward yet functional blogging app built with React Hooks. By leveraging hooks for state management and side effects, Bloggy provides a smooth and efficient blogging experience. Pandikumar K’s use of React Hooks demonstrates a solid understanding of modern React practices, creating a user-friendly application with essential blogging features.
</p>

    </>

  )
}

export default About