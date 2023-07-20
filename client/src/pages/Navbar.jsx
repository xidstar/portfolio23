import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { useSnapshot } from "valtio";
import state from "../store";

const Navbar = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {snap.intro && (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
          <div className="container mx-auto">
            <div
              className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full 
        max-w-[400px] mx-auto px-5 flex justify-around items-center text-2xl text-white/50"
            >
              <Link
                to="Hero"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[60px] flex justify-around items-center rounded-full"
              >
                <BiHomeAlt
                  className={`${snap.isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
              <Link
                to="About"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex justify-around items-center rounded-full"
              >
                <BiUser
                  className={`${snap.isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
              <Link
                to="Projects"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex justify-around items-center rounded-full"
              >
                <BsBriefcase
                  className={`${snap.isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
              <Link
                to="Contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex justify-around items-center rounded-full"
              >
                <BsChatSquare
                  className={`${snap.isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
