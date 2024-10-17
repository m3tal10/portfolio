import { useDarkMode } from "@/contextAPI/DarkModeProvider";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function Layout({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={` ${darkMode ? "dark" : ""} ${inter.variable} `}>
      <div className="grid h-screen grid-rows-[100px_1fr] gap-7 bg-text-light-dark font-sans text-sm text-brand-primary-dark transition-colors duration-1000 dark:bg-brand-secondary-dark lg:grid-cols-[305px_1fr_108px] lg:grid-rows-none">
        <div className=""></div>
        <Sidebar />
        {children}
        <Navbar />
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}

export default Layout;
