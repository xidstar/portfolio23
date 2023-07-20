import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from 'valtio'
import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const ProjectsPage = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.isProjects && (
        <>
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.div
              className="home-content container"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <h1 className="text-white text-3xl z-10">Projects Page</h1>
              </motion.div>

            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectsPage