import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import BorderLines from "../components/BorderLines";
import { PageContent } from "../config/constants";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const About = () => {
  const snap = useSnapshot(state);

  const handleClick = (id) => {
    state.intro = false;

    PageContent.map((page) => {
      if (page.id === id && page.id === "Projects") {
        state.isProjects = true;
        state.isAbout = false;
        state.isContact = false;
      } else if (page.id === id && page.id === "Contact") {
        state.isContact = true;
        state.isProjects = false;
        state.isAbout = false;
      }
    });
  };

  return (
    <AnimatePresence className="h-screen">
      {snap.intro &&
        PageContent.map((page) => (
          <motion.section
            key={page.cta}
            {...page}
            id={page.id}
            className={`home `}
            {...slideAnimation("left")}
          >
            <motion.div
              className="home-content container"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <h2 className="subhead-text text-sm dark:text-slate-100 text-black">
                  {page.name}
                </h2>
              </motion.div>

              <motion.div>
                <BorderLines />
              </motion.div>

              <motion.div {...headContentAnimation}>
                <h3 className="dark:text-slate-100 text-black text-3xl leading-[3.5rem] pb-[2rem]">
                  {page.details}
                </h3>

                <button
                  className="px-5 py-3 w-[130px] text-white bg-[#ff4d5a] rounded-3xl text-lg tracking-wide font-bold hover:transition-all hover:bg-white hover:text-[#ff4d5a]"
                  onClick={() => handleClick(page.id)}
                >
                  {page.cta}
                </button>
              </motion.div>
            </motion.div>
          </motion.section>
        ))}
    </AnimatePresence>
  );
};

export default About;
