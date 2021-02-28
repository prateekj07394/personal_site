import React, { useState, useEffect } from 'react';
import { blogsList, urlMappings } from '../Blogs-Data/data';
import './Styles/BlogItem.css';

const BlogItem = (props) => {
    const [blogDetails, setBlogDetails] = useState({});
    useEffect(() => {
        const query = props.match.params.title;
        const id = urlMappings[query];
        if (id) {
            const details = blogsList.filter((blog) => {
                return blog.id === id;
            })
            setBlogDetails(details[0])
        } else {
            setBlogDetails({
                title: "Error 404",
                body: "<p>Could not find the blog you are searching for</p>"
            })
        }
    }, [])
    return (
        <section className="blogs_list_wrapper">
            <header>{blogDetails.title}</header>
            <article className="blog_body">
                {blogDetails.body}
            </article>
        </section>
    )

}

export default BlogItem;