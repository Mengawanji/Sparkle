import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/blogs";
import BlogSidebar from "../BlogSidebar";

interface BlogProps {
  bclass?: string;
  blRight?: string;
  blLeft?: string;
}

const BlogPage: React.FC<BlogProps> = ({ bclass, blRight, blLeft }) => {

  

  return (
    <section className={`blog-pg-section section-padding ${bclass || ""}`}>
      <div className="container">

        <div className="row">

          {/* BLOG CONTENT */}
          <div className={`col col-lg-8 col-md-12 col-12 ${blRight || ""}`}>

            <div className="blog-content">

              {blogs.map((blog) => {

                const day = blog.date?.split(" ")[0];
                const month = blog.date?.split(" ")[1];

                return (

                  <div className="post format-standard-image" key={blog.id}>

                    {/* IMAGE */}
                    <div className="entry-media">
                      <img src={blog.blogSingleImg} alt={blog.title} />

                      <span>
                        {day} <br />
                        {month}
                      </span>
                    </div>

                    {/* META */}
                    <div className="entry-meta">
                      <ul>

                        <li>
                          <i className="fi flaticon-user"></i>
                          <Link
                            to={`/blog-single/${blog.slug}`}
                          >
                            {blog.author}
                          </Link>
                        </li>

                        <li>
                          <i className="fi ti-comment-alt"></i>
                          <Link to="#">
                            Comments (03)
                          </Link>
                        </li>

                        <li>
                          <i className="fi flaticon-clock"></i>
                          <Link to="#">
                            3 min Read
                          </Link>
                        </li>

                      </ul>
                    </div>

                    {/* DETAILS */}
                    <div className="entry-details">

                      <h3>
                        <Link
                          
                          to={`/blog-single/${blog.slug}`}
                        >
                          {blog.title}
                        </Link>
                      </h3>

                      <p>{blog.description}</p>

                      <Link
                        
                        to={`/blog-single/${blog.slug}`}
                        className="read-more"
                      >
                        Read More
                      </Link>

                    </div>

                  </div>

                );
              })}

              {/* PAGINATION */}
              <div className="pagination-wrapper pagination-wrapper">
                <ul className="pg-pagination">

                  <li>
                    <Link to="#" aria-label="Previous">
                      <i className="fi ti-angle-left left"></i>
                    </Link>
                  </li>

                  <li className="active">
                    <Link to="#">1</Link>
                  </li>

                  <li>
                    <Link to="#">2</Link>
                  </li>

                  <li>
                    <Link to="#">3</Link>
                  </li>

                  <li>
                    <Link to="#" aria-label="Next">
                      <i className="fi ti-angle-right"></i>
                    </Link>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* SIDEBAR */}
          <div className={`col col-lg-4 ${blLeft || ""}`}>
            <BlogSidebar />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogPage;