import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

function SingleBlog() {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const loading = useSelector((state) => state?.blog?.loading); // Assuming you have a loading state in your blogSlice
  const error = useSelector((state) => state?.blog?.error);  // Assuming you handle errors in blogSlice
  const location = useLocation();
  const getblogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    dispatch(getABlog(getblogId));
  };

  return (
    <>
      <Meta title={blogState?.title || "Loading..."} />  {/* Set dynamic meta title */}
      <BreadCrumb title={blogState?.title || "Loading..."} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Trở lại
              </Link>

              {/* Show title or loading message */}
              <h3 className="title">{blogState?.title || "Loading..."}</h3>

              {/* Show loading state or blog content */}
              {loading ? (
                <div className="loading-spinner">Loading...</div>
              ) : error ? (
                <div className="error-message">Error loading blog. Please try again later.</div>
              ) : (
                <>
                  <img
                    src={blogState?.images[0]?.url || blog}
                    alt="blog"
                    className="img-fluid w-100 my-4"
                  />
                  <p
                    style={{ wordWrap: "break-word" }}
                    dangerouslySetInnerHTML={{ __html: blogState?.description }}
                  ></p>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleBlog;
