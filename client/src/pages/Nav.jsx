import React, { useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useSnapshot } from "valtio";
import state from "../store";

const Nav = () => {
  const snap = useSnapshot(state);
  
  
  const [isDarkMode, setIsDarkMode] = useState(snap.isDarkMode);
  state.isDarkMode = isDarkMode;

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-center items-center w-full fixed top-5 z-[1000]">
      <div className="flex justify-between items-center w-[80%] max-w-[1500px]">
        <button onClick={() => {
          state.intro = true;
          window.scrollTo(0, 0);
        }}>
          <img src="./logo.png" alt="" className="w-[70px]" />
        </button>

        <button className="cursor-pointer" onClick={toggleMode}>
          {isDarkMode ? (
            <BsFillSunFill
              style={{
                zIndex: 100,
                fontSize: "30px",
                color: "#fff",
              }}
            />
          ) : (
            <BsFillMoonFill
              style={{
                zIndex: 100,
                fontSize: "25px",
                color: "#000",
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Nav;
