"use client";

import { motion } from "framer-motion";
function ProjectItem() {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
      }}
      className="min-w-36 rounded-md bg-brand-secondary transition-colors duration-1000 scrollbar dark:bg-brand-primary-dark dark:text-brand-secondary"
    >
      <div className="group relative p-8 transition duration-1000 hover:bg-yellow-400">
        <span className="absolute left-[40%] top-[40%] text-6xl font-extralight opacity-0 transition duration-1000 group-hover:opacity-100 dark:text-brand-primary-dark">
          +
        </span>
        <img
          className="transition duration-1000 hover:opacity-40"
          src="/images/projectImages/natours.png"
          alt="natours"
          width="150px"
        />
        <p className="text-center text-lg font-bold">Natours</p>
      </div>
    </motion.li>
  );
}

export default ProjectItem;
