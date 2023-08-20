import React from "react";
import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <NavbarLeft></NavbarLeft>
      <NavbarRight></NavbarRight>
    </div>
  );
};

export default Navbar;
