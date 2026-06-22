import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

import "./style.css";

interface SubMenuItem {
  id: number;
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

const menus: MenuItem[] = [
 {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    submenu: [
      { id: 31, title: "We Offer", link: "/service", },
      { id: 32, title: "Gig", link: "/project-single/deep-clean", },
    ],
    link: ""
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    title: "Book Appointment",
    link: "/appointment",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu: React.FC = () => {

  const [openId, setOpenId] = useState<number>(0);

  const [menuActive, setMenuState] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuState((prev) => !prev);
  };

  const closeMenu = (): void => {
    setMenuState(false);
  };

  const toggleSubmenu = (id: number): void => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <div>

      {/* MOBILE MENU */}
      <div
        className={`mobileMenu ${
          menuActive ? "show" : ""
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="menu-close">

          <button
            type="button"
            className="clox"
            onClick={closeMenu}
            aria-label="Close Menu"
          >

            <i className="ti-close"></i>

          </button>

        </div>

        {/* MENU LIST */}
        <ul className="responsivemenu">

          {menus.map((item) => (

            <ListItem
              className={
                item.id === openId
                  ? "active"
                  : ""
              }
              key={item.id}
            >

              {item.submenu ? (

                <Fragment>

                  <button
                    type="button"
                    className="menu-toggle-btn"
                    onClick={() =>
                      toggleSubmenu(item.id)
                    }
                    aria-expanded={
                      item.id === openId
                    }
                  >

                    {item.title}

                    <i
                      className={
                        item.id === openId
                          ? "fa fa-angle-up"
                          : "fa fa-angle-down"
                      }
                    ></i>

                  </button>

                  <Collapse
                    in={item.id === openId}
                    timeout="auto"
                    unmountOnExit
                  >

                    <List className="subMenu">

                      {item.submenu.map(
                        (submenu) => (

                          <ListItem
                            key={submenu.id}
                          >

                            <Link
                              to={submenu.link}
                              onClick={closeMenu}
                            >

                              {submenu.title}

                            </Link>

                          </ListItem>
                        )
                      )}

                    </List>

                  </Collapse>

                </Fragment>

              ) : (

                <Link
                  to={item.link}
                  onClick={closeMenu}
                >

                  {item.title}

                </Link>

              )}

            </ListItem>

          ))}

        </ul>

      </div>

      {/* OPEN BUTTON */}
      <div className="showmenu">

        <button
          type="button"
          className="navbar-toggler open-btn"
          onClick={toggleMenu}
          aria-label="Open Menu"
        >

          <span className="icon-bar first-angle"></span>

          <span className="icon-bar middle-angle"></span>

          <span className="icon-bar last-angle"></span>

        </button>

      </div>

    </div>
  );
};

export default MobileMenu;