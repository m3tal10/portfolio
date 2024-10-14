import { useDarkMode } from "@/contextAPI/DarkModeProvider";

function Button({ children }) {
  // const { darkMode } = useDarkMode();
  return (
    <button className="dark:text-brand-primary-dark bg-brand-primary px-10 py-3 font-semibold shadow-md transition-all duration-300 hover:bg-brand-primary hover:shadow-lg">
      {children}
    </button>
  );
}

export default Button;
