import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Blogs.css';
import {blogsList} from '../Blogs-Data/data';

const Blogs = () => {
    return (
        <section className="blogs_list_wrapper">
            <header>Blogs</header>
            {blogsList.map((blog) => {
                const title = blog.title.replace(/ /g, "-").toLowerCase();
                return (
                    <div key={blog.id} className="blog_name_wrapper">
                        <Link to={`/blog/${title}`}   >
                            <span className="date-wrapper">{new Date(blog.created_on).toDateString()}</span>
                            <span>{blog.title}</span>
                        </Link>
                    </div>
                )
            }
            )}
        </section>
    )

}

export default Blogs;