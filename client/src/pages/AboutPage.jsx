import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from 'valtio'
import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'

const AboutPage = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.isAbout && (
        <>
          <motion.section className="home h-screen" {...slideAnimation("left")}>
            <motion.div
              className="home-content container flex items-center justify-center"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <div className="text-wrapper lg:w-[75%]">
                  <h3 className="dark:text-white text-3xl z-10 md:text-[3rem] xl:text-[6rem] md:leading-[3rem] xl:leading-[6rem] my-10">
                    CREATING DIGITAL SOLUTIONS <br />
                    <span className="text-[3rem]">That Elevate Brands</span>
                  </h3>
                  <div className="text-wrapper dark:bg-slate-600 bg-slate-200 opacity-90 p-10 rounded-3xl">
                    <p className="dark:text-slate-100 text-blacktext-xl mb-5">
                      A passionate developer with a track record of creating
                      innovative and engaging websites. My approach to web
                      development is collaborative and client-centered. I
                      believe that every client is unique and deserves a
                      customized solution tailored to their specific needs and
                      goals. That's why I take the time to listen carefully to
                      my clients and work closely with them throughout the
                      entire development process. I believe that communication
                      and collaboration are key to delivering exceptional
                      results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}

export default AboutPage