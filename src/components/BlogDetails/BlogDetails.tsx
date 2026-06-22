import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../api/blogs";
import BlogSidebar from "../BlogSidebar";
import bImg1 from "../../images/blog-details/img-2.jpg";
import bImg2 from "../../images/blog-details/img-3.jpg";
import bImg3 from "../../images/blog-details/img-4.jpg";

interface BlogProps {
  bclass?: string;
  blRight?: string;
  blLeft?: string;
}

const BlogSingle: React.FC<BlogProps> = ({ bclass, blRight, blLeft }) => {

  const { slug } = useParams<{ slug: string }>();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return <div className="container">
      <div className="not-found">
        Blog not found!
      </div>
    </div>;
  }

  return (
    <section className={`blog-single-section section-padding ${bclass || ""}`}>
      <div className="container">

        <div className="row">

          {/* BLOG CONTENT */}
          <div className={`col col-lg-8 col-md-12 col-12 ${blRight || ""}`}>

            <div className="post format-standard-image">

              <div className="entry-media">
                <img src={blog.blogSingleImg} alt={blog.title} />
              </div>

              <div className="entry-meta">
                <ul>

                  <li>
                    <i className="fi flaticon-calendar"></i>
                    <Link to="#">{blog.date}</Link>
                  </li>

                  <li>
                    <i className="fi ti-comment-alt"></i>
                    <Link to="#">Comments ({blog.comments})</Link>
                  </li>

                  <li>
                    <i className="fi flaticon-clock"></i>
                    <Link to="#">3 min Read</Link>
                  </li>

                </ul>
              </div>

              <div className="entry-details">

                <h3>{blog.title}</h3>

                <p>{blog.content.intro}</p>

                {blog.content.sections.map((section) => (
                  <div key={section.heading}>
                    <h4>{section.heading}</h4>
                    <p>{section.body}</p>
                  </div>
                ))}

              </div>

            </div>


            {/* QUOTE */}
            {/* IMAGE GALLERY */}
            {/* <div className="row">

              <div className="col-lg-6 col-md-6 col-12 im-1">
                <img src={bImg2} alt="" />
              </div>

              <div className="col-lg-6 col-md-6 col-12 im-1">
                <img src={bImg3} alt="" />
              </div>

            </div> */}


            <p>{blog.content.conclusion}</p>

            {/* COMMENT FORM */}
            <div className="comments-area">

              <div className="comment-respond">

                <h3 className="comment-reply-title">Write your comment</h3>

                <form className="comment-form">

                  <div className="form-inputs">

                    <div>
                      <input placeholder="Enter your name*" type="text" required />
                    </div>

                    <div>
                      <input placeholder="Enter your mail*" type="email" required />
                    </div>

                    <div>
                      <input placeholder="Enter your number*" type="text" required />
                    </div>

                    <div>
                      <input placeholder="Website*" type="url" />
                    </div>

                  </div>

                  <div className="form-textarea">
                    <textarea placeholder="Enter your Message*"></textarea>
                  </div>

                  <div className="form-submit">
                    <input className="theme-btn" value="Send Message" type="submit" />
                  </div>

                </form>

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

export default BlogSingle;