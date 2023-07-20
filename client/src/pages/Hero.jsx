import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import BorderLines from "../components/BorderLines";

import { Link, Element, animateScroll as scroll } from 'react-scroll';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Hero = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {snap.intro && (
        <motion.section className="home h-screen container" id="Hero">
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text dark:text-slate-100 text-black">
                SIDNEY <br /> OLUOCH
              </h1>
            </motion.div>

            <motion.div>
              <BorderLines />
            </motion.div>

            <motion.div {...headContentAnimation}>
              <h3 className="dark:text-slate-100 text-black text-3xl leading-[3.5rem] pb-[2rem]">
                Creative Developer | <br /> Portfolio...
              </h3>

              <Link
                to="About"
                activeClass="active"
                smooth={true}
                spy={true}
                className="px-[2rem] py-4 text-white bg-[#ff4d5a] rounded-3xl text-lg tracking-wide font-bold hover:transition-all hover:bg-white hover:text-[#ff4d5a] cursor-pointer"
              >
                Explore
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
}

export default Hero