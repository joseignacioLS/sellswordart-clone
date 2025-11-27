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
        className="cursor-pointer absolute top-4 right-4 md:hidden h-8"
        onClick={() => setShowMenu((v) => !v)}
      >
        <img
          className="h-8"
          src={`/assets/icons/${showMenu ? "menu copy" : "menu"}.svg`}
        />
      </button>
      {showMenu && (
        <nav className="md:hidden fixed top-0 right-0 w-full h-full bg-gray-950 flex justify-center items-center z-10">
          <button
            className="cursor-pointer absolute top-4 right-4 md:hidden h-8 z-20"
            onClick={() => setShowMenu((v) => !v)}
          >
            <img
              className="h-8"
              src={`/assets/icons/${showMenu ? "menu copy" : "menu"}.svg`}
            />
          </button>
          <ul className="text-2xl flex flex-col gap-4 text-center">
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
