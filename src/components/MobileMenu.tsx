import React, { useEffect, useState } from "react";
import { routes } from "../routes";

export const MobileMenu: React.FC<{}> = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location?.pathname]);

  return (
    <>
      <button
        className="absolute md:hidden top-4 right-4 h-8 cursor-pointer "
        onClick={() => setShowMenu((v) => !v)}
      >
        <img
          className="h-8"
          src={`/assets/icons/${showMenu ? "menu copy" : "menu"}.svg`}
        />
      </button>
      {showMenu && (
        <nav className="md:hidden fixed top-0 right-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-gray-950 z-10">
          <button
            className=" md:hidden  absolute top-4 right-4 h-8 z-20 cursor-pointer"
            onClick={() => setShowMenu((v) => !v)}
          >
            <img
              className="h-8"
              src={`/assets/icons/${showMenu ? "menu copy" : "menu"}.svg`}
            />
          </button>

          <img src="/assets/images/logo.webp" className="h-18" />

          <ul className="flex flex-col gap-4 text-2xl text-center">
            {routes.map(({ path, label }) => {
              const external = /https?:\/\//.test(path);
              return (
                <li key={path}>
                  <a href={path} target={external ? "_blank" : "_self"}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};
