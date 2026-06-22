import React from "react";
import { useRef } from "react";
import { useSplitTextAnimation } from "../splittextAnimation/useSplitTextAnimation";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import blogs from "../../api/blogs";

const BlogSection: React.FC = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  

  return (

    <section className="blog-section"  ref={ref}>

      <div className="container">

        {/* Section Title */}
        <div className="wpo-section-title">

          <span>Update news & Blogs</span>

          <h2 className="poort-text poort-in-right">
            Stay Informed with Our Blog
          </h2>

        </div>

        {/* Blog Items */}
        <div className="row">

          {blogs.map((blog, index) => (

            <div
              key={blog.id}
              className="col-lg-4 col-md-6 col-12"
            >

              <Fade
                direction="up"
                duration={1000 + index * 200}
                triggerOnce
              >

                <div className="blog-card">

                  <div className="image">

                    <img
                      src={blog.image}
                      alt={blog.title}
                    />

                    <img
                      src={blog.image}
                      alt={blog.title}
                    />

                  </div>

                  <div className="content">

                    <div className="text">

                      <span>

                        <Link
                          
                          to={`/blog-single/${blog.slug}`}
                        >

                          {blog.category}

                        </Link>

                      </span>

                      <h3>

                        <Link
                          
                          to={`/blog-single/${blog.slug}`}
                        >

                          {blog.title}

                        </Link>

                      </h3>

                    </div>

                    <div className="blg-bottom">

                      <ul>

                        <li>
                          <i className="ti-user"></i>
                          {blog.author}
                        </li>

                        <li>

                          <Link
                            
                            to={`/blog-single/${blog.slug}`}
                          >

                            <i className="ti-comment-alt"></i>

                            Comments({blog.comments})

                          </Link>

                        </li>

                      </ul>

                    </div>

                  </div>

                </div>

              </Fade>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default BlogSection;