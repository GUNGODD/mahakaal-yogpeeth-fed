import React from "react";

export const Navbar = () => {
  return (
    <div className=" flex flex-row gap-5 m-2 p-3 z-10  mx-auto bg-emerald-5 border broder-black-900">
      <nav className="flex flex-row gap-5  ">
        <ul className="flex gap-3 ">
          <li>
            <a href="#Home"> Home </a>
          </li>
          <li>
            <a href="#Couses">Courses </a>
          </li>
          <li>
            <a href="#Teacehrs "> Our Teachers </a>
          </li>
          <li>
            <a href="#Gallery "> Gallery </a>
          </li>
        </ul>
      </nav>
      <div className="flex m-auto ">
        <h2>Logo </h2>
      </div>
      <div>
        <span>contact us </span>
      </div>
    </div>
  );
};
