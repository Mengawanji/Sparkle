import React, { useEffect, useState } from "react";
import Header from "../header";

interface NavbarProps {
  hclass?: string;
}

const Navbar: React.FC<NavbarProps> = ({ hclass }) => {

  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const className =
    scroll > 80
      ? "fixed-navbar active"
      : "fixed-navbar";

  return (

    <div className={className}>

      <Header hclass={hclass} />

    </div>

  );
};

export default Navbar;