import React, { useState } from "react";
import closeImg from "../assets/close.svg";
import downImg from "../assets/down.svg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    {
      title: "About",
      hasDropdown: true,
    },
    {
      title: "Job Search",
      hasDropdown: false,
    },
    {
      title: "Candidates",
      hasDropdown: true,
    },
    {
      title: "Employers",
      hasDropdown: true,
    },
    {
      title: "Latest News",
      hasDropdown: false,
    },
    {
      title: "Contact",
      hasDropdown: false,
    },
  ];

  return (
    <div className="nav flex items-center justify-between py-8 px-12 relative">
      <div
        className="lg:hidden absolute top-5 right-5 cursor-pointer"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <div className="space-y-2">
          <div className="w-7 h-0.5 bg-primary"></div>
          <div className="w-7 h-0.5 bg-primary"></div>
          <div className="w-7 h-0.5 bg-primary"></div>
        </div>
      </div>
      <div className="logo"></div>
      <div className="nav_items  items-center hidden lg:flex ">
        {navItems &&
          navItems.map((item, index) => (
            <div
              key={index}
              className="nav_item  flex items-center mx-4 cursor-pointer "
            >
              <div>{item.title}</div>
              {item.hasDropdown ? (
                <img src={downImg} alt="down" className="ml-2" />
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
      {isNavOpen && (
        <div className="fixed top-0 left-0  p-5 bg-white z-20 min-h-screen w-full">
          <div
            className="flex items-end justify-end"
            onClick={() => setIsNavOpen(false)}
          >
            <img src={closeImg} alt="close" />
          </div>
          <div className="nav_items  items-center  ">
            {navItems &&
              navItems.map((item, index) => (
                <div
                  key={index}
                  className="nav_item  flex items-center mx-4 my-8 text-primary cursor-pointer "
                >
                  <div>{item.title}</div>
                  {item.hasDropdown ? (
                    <img src={downImg} alt="down" className="ml-2" />
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
