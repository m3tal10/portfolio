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
    <div
      className={` ${darkMode ? "dark" : ""} ${inter.variable} text-brand-primary-dark grid h-screen grid-cols-[305px_1fr_108px] gap-7 font-sans text-sm`}
    >
      <div className=""></div>
      <Sidebar />
      {children}
      <Navbar />
      <div></div>
    </div>
  );
}

export default Layout;
