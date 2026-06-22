import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

interface SubMenu {
  title: string;
  link: string;
  children?: SubMenu[];
}

interface MenuItem {
  title: string;
  children?: SubMenu[];
  link?: string;
}

const menus: MenuItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    children: [
      { title: "We Offer",  link: "/service",},
      { title: "Gig",  link: "/project-single/deep-clean",},
    ],
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Book",
    link: "/appointment",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

interface FunFactProps {
  hclass?: string;
}

const Header: React.FC<FunFactProps> = ({ hclass }) => {
  return (
    <header id="header" className={`${hclass || ""}`}>
      <div className="wpo-site-header">

        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            <div className="row align-items-center">

              {/* MOBILE */}
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>

              {/* LOGO */}
              <div className="col-lg-2 col-md-5 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              {/* MENU */}
              <div className="col-lg-5 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">

                  <ul className="nav navbar-nav mb-2 mb-lg-0">

                    {menus.map((menu, index) => (
                      <li
                        key={index}
                        className={menu.children ? "menu-item-has-children" : ""}
                      >

                        {menu.link ? (
                          <Link to={menu.link}>{menu.title}</Link>
                        ) : (
                          <Link to="#">{menu.title}</Link>
                        )}

                        {menu.children && (
                          <ul className="sub-menu">

                            {menu.children.map((sub, i) => (
                              <li
                                key={i}
                                className={
                                  sub.children ? "menu-item-has-children" : ""
                                }
                              >

                                <Link to={sub.link || "#"}>
                                  {sub.title}
                                </Link>

                                {sub.children && (
                                  <ul className="sub-menu">

                                    {sub.children.map((child, j) => (
                                      <li key={j}>
                                        <Link to={child.link}>
                                          {child.title}
                                        </Link>
                                      </li>
                                    ))}

                                  </ul>
                                )}

                              </li>
                            ))}

                          </ul>
                        )}

                      </li>
                    ))}

                  </ul>

                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-5 col-md-3 col-2">

                <div className="header-right">

                  <div className="header-contact">

                    <div className="header-contact-icon">
                      <a href="tel:+15195771711">
                        <i className="ti-mobile"></i>
                      </a>
                    </div>

                    <div className="header-contact-text">
                      <a href="tel:+887869587496">
                        <span>Need any Help! call Us today</span>
                        <h4>+1 519 577 1711</h4>
                      </a>
                    </div>

                  </div>

                  <div className="close-form">
                    <a className="theme-btn" href="mailto:bookings@sandysparkle.com">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                        >
                          <path
                            d="M14.7821 15H4.21786C1.66786 15 1 14.7647 1 11.8824V4.11765C1 1.23529 1.66786 1 4.21786 1H14.7821C17.3321 1 18 1.23529 18 4.11765V11.8824C18 14.7647 17.3321 15 14.7821 15Z"
                            stroke="#036C5F"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.5 5L10.37 8.5C9.34 9.32 9.65 9.32 8.62 8.5L4.5 5"
                            stroke="#036C5F"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                      <span>bookings@sandysparkle.com</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;