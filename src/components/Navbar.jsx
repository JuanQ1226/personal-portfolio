import React from "react";
import "./css/Navbar.css";

const NavLinks = [
  { text: "About", icon: "fa-solid fa-person" },
  { text: "Projects", icon: "fa-solid fa-code" },
  { text: "Contact", icon: "fa-solid fa-envelope" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black border-b-[1px] border-b-neutral-700 text-white flex justify-between p-4 items-center">
        <div className="flex justify-center items-center text-center">
          <h1 className="font-barcode hidden md:block md:text-4xl">
            Juan Quintana
          </h1>
        </div>
        <ul className="grid grid-cols-3 gap-6 lg:mx-6">
          {NavLinks.map((link) => {
            const handleClick = () => {
              const element = document.getElementById(link.text);
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            };

            return (
              <li className="text-center" key={link.text}>
                <button
                  onClick={handleClick}
                  className="text-sm  md:text-lg w-full bg-neutral-700 rounded border-[1px] border-neutral-700 hover:bg-black transition-all duration-300 ease-in-out gap-2 flex items-center justify-center p-2"
                >
                  <i className={link.icon}></i>
                  {link.text}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
