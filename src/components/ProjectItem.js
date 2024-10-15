"use client";

import Image from "next/image";

function ProjectItem() {
  return (
    <li className="min-w-36 overflow-auto rounded-md bg-brand-secondary transition-all duration-1000 scrollbar dark:bg-brand-primary-dark dark:text-brand-secondary">
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
    </li>
  );
}

export default ProjectItem;
