import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogCard(props) {
  const { id, title, description, date, image } = props;

  // Check if description is defined before using substr
  const truncatedDescription = description ? description.substr(0, 70) + "..." : "";

  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-image">
        <motion.img
          src={image ? image : "images/blog-1.jpg"}
          className="img-fluid w-100"
          alt="blog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          style={{ wordWrap: "break-word" }}
          dangerouslySetInnerHTML={{
            __html: truncatedDescription,
          }}
        ></p>
        <Link to={`/blog/${id}`} className="button">
          Read More
        </Link>
      </div>
    </motion.div>
  );
}

export default BlogCard;
