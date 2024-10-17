import { motion } from "framer-motion";
import Link from "next/link";
function ProjectItem({ image, name, link }) {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
      }}
      className="min-w-36 rounded-md bg-brand-secondary transition-colors duration-1000 scrollbar hover:cursor-pointer dark:bg-brand-primary-dark dark:text-brand-secondary"
    >
      <Link href={link} target="_blank">
        <div className="group relative p-8 transition duration-1000 hover:bg-yellow-400">
          <span className="absolute left-[40%] top-[40%] text-6xl font-extralight opacity-0 transition duration-1000 group-hover:opacity-100 dark:text-brand-primary-dark">
            +
          </span>
          <img
            className="h-56 w-32 transition duration-1000 hover:opacity-40"
            src={`/images/projectImages/${image}`}
            alt="natours"
          />
          <p className="text-center text-lg font-bold">{name}</p>
        </div>
      </Link>
    </motion.li>
  );
}

export default ProjectItem;
