import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../api/blogs";

import aboutImg from "../../images/blog/about-widget.jpg";

const BlogSidebar: React.FC = () => {

  

  return (

    <div className="blog-sidebar">

      {/* ABOUT WIDGET */}
      <div className="widget about-widget">

        <div className="img-holder">
          <img src={aboutImg} alt="about" />
        </div>

        <h4>Sandra NK</h4>

        <span>Cleaning Expert</span>

        <p>
          Sandra is a professional home cleaning specialist and organizer
          based in Ottawa, Canada. Passionate about spotless living spaces.
        </p>

        <ul>
          <li><Link to="https://www.facebook.com/sandra.nk.417622"><i className="flaticon-facebook-app-symbol"></i></Link></li>
        </ul>

      </div>


      {/* SEARCH */}
      <div className="widget search-widget">

        <h3>Search Here</h3>

        <form>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Post.."
            />

            <button type="submit">
              <i className="ti-search"></i>
            </button>
          </div>
        </form>

      </div>


      {/* RECENT POSTS */}
      <div className="widget recent-post-widget">

        <h3>Related Posts</h3>

        <div className="posts">

          {blogs.slice(0, 3).map((blog) => (

            <div className="post" key={blog.id}>

              <div className="img-holder">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="details">

                <span className="date">
                  <i className="flaticon-calendar"></i> {blog.date}
                </span>

                <h4>
                  <Link
                    
                    to={`/blog-single/${blog.slug}`}
                  >
                    {blog.title}
                  </Link>
                </h4>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* TAGS */}
      <div className="widget tag-widget">

        <h3>Popular Tags</h3>

        <ul>
          <li><Link to="#">Kitchen</Link></li>
          <li><Link to="#">Deep Cleaning</Link></li>
          <li><Link to="#">Windows</Link></li>
          <li><Link to="#">Disinfection</Link></li>
          <li><Link to="#">Laundry</Link></li>
          <li><Link to="#">Bathroom</Link></li>
          <li><Link to="#">Basement</Link></li>
          <li><Link to="#">Organization</Link></li>
        </ul>

      </div>


      {/* CATEGORY */}
      <div className="widget category-widget">

        <h3>Categories</h3>

        <ul>
          <li><Link to="#">Kitchen Cleaning<span>25</span></Link>
          </li>
          <li><Link to="#">Deep Cleaning Services<span>34</span></Link>
          </li>
          <li><Link to="#" className="active">Window & Glass Cleaning
            <span>50</span></Link></li>
          <li><Link to="#">Bathroom Cleaning<span>46</span></Link></li>
          <li><Link to="#">Basement Cleaning<span>15</span></Link></li>
          <li><Link to="#">Home Organization<span>48</span></Link>
          </li>
        </ul>

      </div>

    </div>

  );
};

export default BlogSidebar;