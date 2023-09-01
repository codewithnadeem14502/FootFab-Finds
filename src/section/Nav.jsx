import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNavbar = () => {
    console.log(openNav);
    if (openNav == false) {
      setOpenNav(true);
    } else setOpenNav(false);
  };

  return (
    <header className=" padding-x py-8 z-10 w-full  ">
      {openNav == true ? (
        <div className="w-[350px] h-[400px]  md:w-full sm:w-[350px]">
          <h1 className="text-4xl float-right mb-2 ml-2" onClick={handleNavbar}>
            &times;
          </h1>
          <ul className="flex-1 flex flex-col justify-center items-center gap-5 border-2 border-black   bg-coral-red h-[400px] ">
            {navLinks.map((link) => (
              <li key={link.label}>
                {" "}
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-3xl gap-1 text-slate-gray "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <nav className="  flex justify-between items-center max-container mt-2">
          <a href="/">
            <img src={headerLogo} alt="logo image" width={130} height={29} />
          </a>
          {/* max-lg = phone size  */}
          <ul className="flex-1 flex  pt-0  justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                {" "}
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {" "}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={handleNavbar}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Nav;
