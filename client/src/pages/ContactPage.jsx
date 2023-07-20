import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { Interests } from "../config/constants";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const ContactPage = () => {
  const snap = useSnapshot(state);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted!");
  };

   const handleInterestClick = (interest) => {
     if (interests.includes(interest)) {
       setInterests(interests.filter((item) => item !== interest));
     } else {
       setInterests([...interests, interest]);
     }
   };

  return (
    <AnimatePresence>
      {snap.isContact && (
        <>
          <motion.section className="home h-screen" {...slideAnimation("left")}>
            <motion.div
              className="home-content container"
              {...headContainerAnimation}
            >
              <motion.div
                {...headTextAnimation}
                className="h-full flex flex-col justify-center"
              >
                <h1 className="dark:text-white text-3xl z-10 md:text-[3rem] xl:text-[6rem] md:leading-[3rem] xl:leading-[6rem] my-10">
                  LET'S MAKE SOMETHING
                </h1>
                <div className="form-wrapper dark:bg-slate-600 bg-slate-200 opacity-90 p-10 rounded-3xl">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap items-center"
                  >
                    <label htmlFor="name" className="dark:text-slate-100">
                      Hello! My name is{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      placeholder="your full name"
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-transparent border-b-2 border-slate-400 px-2 mx-2 text-slate-100 focus:border-0"
                    />
                    <br />
                    <br />

                    <label htmlFor="email" className="dark:text-slate-100 ">
                      and I want to discuss a potential project. You can email
                      me at
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      placeholder="your@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent border-b-2 border-slate-400 px-2 mx-2 text-slate-100"
                    />
                    <br />
                    <br />

                    <label htmlFor="phone" className="dark:text-slate-100 ">
                      {" "}
                      or reach me on{" "}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      placeholder="your phone #"
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-transparent border-b-2 border-slate-400 px-2 mx-2 text-slate-100"
                    />
                    <br />
                    <br />

                    <label htmlFor="message" className="dark:text-slate-100 ">
                      . Here are some details about my project:{" "}
                    </label>

                    <br />
                    <br />
                    <br />
                    <br />

                    <textarea
                      id="message"
                      value={message}
                      placeholder="My project is about..."
                      onChange={(e) => setMessage(e.target.value)}
                      rows="1"
                      required
                      className="bg-transparent border-b-2 border-slate-400 px-2 mx-2 w-full text-slate-100"
                    ></textarea>
                    <br />
                    <br />
                    <br />
                    <br />

                    <label htmlFor="interests" className="dark:text-slate-100 ">
                      I'm interested in (select one or more):
                    </label>

                    <div id="interests" className="">
                      {Interests.map((interest) => (
                        <button
                          key={interest.option}
                          type="button"
                          className={`py-2 px-3 m-2 rounded-2xl 
                          ${
                            interests.includes(interest.option)
                              ? "selected active text-white"
                              : "bg-slate-300 "
                          }`}
                          onClick={() => handleInterestClick(interest.option)}
                        >
                          {interest.option}
                        </button>
                      ))}
                    </div>
                    <br />
                    <br />

                    <div className="w-full">
                      <input
                        type="submit"
                        value="Send"
                        className="block px-[2rem] py-3 my-5 text-white bg-[#ff4d5a] rounded-3xl text-lg tracking-wide font-bold hover:transition-all hover:bg-white hover:text-[#ff4d5a] cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactPage;
