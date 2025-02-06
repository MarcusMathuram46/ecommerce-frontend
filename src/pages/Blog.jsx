import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { motion } from "framer-motion";  // Importing Framer Motion

function Blog() {
    const blogState = useSelector((state) => state?.blog?.blogs);
    const loading = useSelector((state) => state?.blog?.loading);  
    const error = useSelector((state) => state?.blog?.error);      

    const [category, setCategory] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        getBlogs();
    }, [category]);

    const getBlogs = () => {
        dispatch(getAllBlogs(category));  
    };

    const handleCategoryClick = (category) => {
        setCategory(category); 
    };

    return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrumb title="Blogs" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <motion.div 
                            className="filter-card mb-3"
                            initial={{ opacity: 0 }}  // Start state for fade-in effect
                            animate={{ opacity: 1 }}  // End state when the element is visible
                            transition={{ duration: 0.6 }}  // Duration of the animation
                        >
                            <h3 className="filter-title">Find By Categories</h3>
                            <motion.div>
                                <ul className="ps-0">
                                    <motion.li 
                                        whileHover={{ scale: 1.1 }} 
                                        onClick={() => handleCategoryClick("Watch")}
                                    >
                                        Watch
                                    </motion.li>
                                    <motion.li 
                                        whileHover={{ scale: 1.1 }} 
                                        onClick={() => handleCategoryClick("Tv")}
                                    >
                                        Tv
                                    </motion.li>
                                    <motion.li 
                                        whileHover={{ scale: 1.1 }} 
                                        onClick={() => handleCategoryClick("Camera")}
                                    >
                                        Camera
                                    </motion.li>
                                    <motion.li 
                                        whileHover={{ scale: 1.1 }} 
                                        onClick={() => handleCategoryClick("Laptop")}
                                    >
                                        Laptop
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-9">
                        {loading && <p>Loading blogs...</p>}
                        {error && <p>Error fetching blogs: {error}</p>}
                        <motion.div
                            className="row"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {blogState?.length ? (
                                blogState.map((blog, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="col-6 mb-3"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <BlogCard blog={blog} />
                                    </motion.div>
                                ))
                            ) : (
                                <p>No blogs found.</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Blog;
