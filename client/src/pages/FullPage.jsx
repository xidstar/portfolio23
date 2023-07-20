import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { fadeAnimation, slideAnimation, btnAnimation } from '../config/motion';
import { Tab, CustomButton } from '../components';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


const FullPage = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
          <div className="relative">
            <AboutPage />
            <ProjectsPage />
            <ContactPage />

            <motion.div
              className="absolute bottom-20 w-full flex justify-center z-[100] container"
              {...btnAnimation}
            >
              <CustomButton
                title="Go Back"
                handleClick={() => {
                  state.intro = true;
                  window.scrollTo(0, 0);
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm "
              />
            </motion.div>
          </div>
        )}
    </AnimatePresence>
  );
}

export default FullPage