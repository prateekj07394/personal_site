import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const blogsList = [{
            id: 1,
            icon: "JS",
            title: "What is JavaScript",
            created_on: "2/20/2020"
        }]
        setBlogs(blogsList)
    }, [])
    return (
        <section className="blogs_list_wrapper">
            <header>Blogs</header>
            {blogs.map((blog) =>{
                const title = blog.title.replace(/ /g,"-").toLowerCase();
                return (
                    <Link to={`/blog/${title}`} className="blog_name_wrapper"  key={blog.id}>
                    <span>{new Date(blog.created_on).toDateString()}</span>
                    <span>{blog.title}</span>
                </Link>
                )
            }
            )}
        </section>
    )

}

export default Blogs;