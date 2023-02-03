import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPageLayout from '../components/BlogPageLayout';
import data from '../data/blog_data.json'

const BlogPage = () => {
    return(
        <>
            <Navbar/>
            <BlogPageLayout data={data}/>
            <Footer/>
        </>
    )
}
export default BlogPage;