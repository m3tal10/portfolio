import { motion } from "framer-motion";

function Button({ children }) {
  // const { darkMode } = useDarkMode();
  return (
    <motion.button
      whileHover={{
        scale: 1.06,
      }}
      className="bg-brand-primary px-10 py-3 font-semibold text-brand-primary-dark shadow-md"
    >
      {children}
    </motion.button>
  );
}

export default Button;
