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
      className={` ${darkMode ? "dark" : ""} ${inter.variable} grid h-screen grid-rows-[100px_1fr] gap-7 font-sans text-sm text-brand-primary-dark lg:grid-cols-[305px_1fr_108px] lg:grid-rows-none`}
    >
      <div className=""></div>
      <Sidebar />
      {children}
      <Navbar />
      <div className="hidden lg:block"></div>
    </div>
  );
}

export default Layout;
