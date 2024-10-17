import { useDarkMode } from "@/contextAPI/DarkModeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();
  const path = usePathname();
  const isActive = (href) => {
    return href === path;
  };
  const navListStyle =
    "group flex h-10 w-10 items-center justify-center rounded-full";

  const navIconStyle =
    "h-full w-full p-2 transition-all duration-300 group-hover:fill-brand-primary-dark";

  function handleDarkModeToggle() {
    setDarkMode((dark) => !dark);
    return;
  }

  return (
    <nav className="bg fixed z-20 flex w-screen flex-row items-center justify-between bg-brand-secondary px-4 py-8 transition-colors duration-1000 dark:bg-brand-primary-dark lg:bottom-0 lg:right-0 lg:h-full lg:w-auto lg:flex-col lg:justify-between lg:px-8 lg:py-14">
      <Link href="/about-me" className="">
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          src="/images/profile1.png"
          alt="mashrafie-photo"
          width="40px"
          className="rounded-full bg-profile-back"
        />
      </Link>

      <ul className="flex flex-row items-center justify-between gap-6 rounded-md border border-brand-primary p-2 lg:flex-col lg:gap-10">
        {/* Home Icon*/}
        <motion.li
          whileHover={
            {
              // scale: 1.1,
            }
          }
          className={`${isActive("/") ? "bg-brand-primary" : "bg-brand-secondary hover:bg-brand-primary dark:bg-brand-primary-dark dark:hover:bg-brand-primary"} group flex h-10 w-10 items-center justify-center rounded-full`}
        >
          <Link href="/" className="">
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isActive("/") ? "fill-brand-primary-dark" : "fill-text-light dark:fill-brand-secondary"} h-full w-full p-2 transition-all duration-300 group-hover:fill-brand-primary-dark`}
            >
              <g clipPath="url(#clip0_3_204)">
                <path d="M15 14.9999C15 15.1989 14.921 15.3896 14.7803 15.5303C14.6397 15.6709 14.4489 15.7499 14.25 15.7499H3.75C3.55109 15.7499 3.36032 15.6709 3.21967 15.5303C3.07902 15.3896 3 15.1989 3 14.9999V8.24994H0.75L8.49525 1.20894C8.63333 1.0833 8.81331 1.01367 9 1.01367C9.18669 1.01367 9.36667 1.0833 9.50475 1.20894L17.25 8.24994H15V14.9999Z" />
              </g>
              <defs>
                <clipPath id="clip0_3_204">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </motion.li>
        {/* Services Icon  */}

        {/* <li className={navListStyle}>
          <svg
            id="services"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={navIconStyle}
          >
            <g clipPath="url(#clip0_3_216)">
              <path d="M17.5 4.28699V4.5H12V0H12.2603C12.5338 0 12.7962 0.0889101 12.9896 0.247113L17.198 3.69035C17.3913 3.8486 17.5 4.06321 17.5 4.28699ZM11.6562 5.625C11.0891 5.625 10.625 5.24531 10.625 4.78125V0H2.03125C1.4617 0 1 0.377754 1 0.84375V17.1562C1 17.6222 1.4617 18 2.03125 18H16.4688C17.0383 18 17.5 17.6222 17.5 17.1562V5.625H11.6562ZM6.29401 14.0803C6.27317 14.0984 6.24815 14.1131 6.22039 14.1234C6.19263 14.1337 6.16266 14.1394 6.13221 14.1402C6.10175 14.141 6.0714 14.1368 6.04289 14.1281C6.01437 14.1193 5.98826 14.106 5.96603 14.0889L3.17882 11.951C3.15567 11.9332 3.13722 11.9118 3.1246 11.888C3.11199 11.8641 3.10548 11.8384 3.10548 11.8125C3.10548 11.7865 3.11199 11.7608 3.1246 11.737C3.13722 11.7132 3.15567 11.6917 3.17882 11.674L5.96603 9.53606C5.98826 9.51901 6.01437 9.50571 6.04289 9.49691C6.0714 9.48812 6.10175 9.484 6.13221 9.48481C6.16266 9.48561 6.19263 9.49131 6.22039 9.50159C6.24815 9.51187 6.27317 9.52652 6.29401 9.54471L7.13529 10.2789C7.15655 10.2975 7.17304 10.3194 7.18377 10.3432C7.19451 10.3671 7.19927 10.3925 7.19778 10.4179C7.19629 10.4433 7.18858 10.4682 7.1751 10.4911C7.16161 10.514 7.14264 10.5345 7.11931 10.5513L5.36777 11.8125L7.11931 13.0737C7.14264 13.0905 7.16161 13.111 7.1751 13.1339C7.18858 13.1568 7.19629 13.1817 7.19778 13.2071C7.19927 13.2325 7.19451 13.2579 7.18377 13.2818C7.17304 13.3056 7.15655 13.3275 7.13529 13.3461L6.29401 14.0803ZM8.49809 15.8549L7.31847 15.5747C7.25937 15.5607 7.20951 15.528 7.17985 15.4839C7.15019 15.4398 7.14316 15.3878 7.1603 15.3394L9.8003 7.89947C9.81747 7.85112 9.85741 7.81032 9.91133 7.78606C9.96525 7.76179 10.0287 7.75603 10.0878 7.77006L11.2674 8.05025C11.2967 8.05721 11.324 8.06881 11.3478 8.08439C11.3716 8.09998 11.3914 8.11924 11.406 8.14109C11.4207 8.16294 11.43 8.18694 11.4334 8.21172C11.4367 8.2365 11.434 8.26158 11.4256 8.28552L8.78555 15.7255C8.77707 15.7494 8.76291 15.7718 8.74387 15.7913C8.72483 15.8107 8.70129 15.8269 8.6746 15.8389C8.6479 15.851 8.61857 15.8586 8.58829 15.8613C8.558 15.864 8.52735 15.8619 8.49809 15.8549ZM15.4071 11.951L12.6199 14.0889C12.5977 14.106 12.5716 14.1193 12.5431 14.1281C12.5145 14.1368 12.4842 14.141 12.4537 14.1402C12.4233 14.1394 12.3933 14.1337 12.3655 14.1234C12.3378 14.1131 12.3128 14.0984 12.2919 14.0803L11.4506 13.346C11.4293 13.3275 11.4129 13.3056 11.4021 13.2817C11.3914 13.2579 11.3866 13.2325 11.3881 13.2071C11.3896 13.1817 11.3973 13.1568 11.4108 13.1338C11.4243 13.1109 11.4433 13.0905 11.4666 13.0737L13.2182 11.8125L11.4666 10.5513C11.4433 10.5345 11.4243 10.514 11.4108 10.4911C11.3974 10.4682 11.3896 10.4433 11.3882 10.4179C11.3867 10.3925 11.3914 10.3671 11.4022 10.3432C11.4129 10.3194 11.4294 10.2975 11.4506 10.2789L12.292 9.54471C12.3128 9.52652 12.3378 9.51187 12.3656 9.50159C12.3934 9.49131 12.4233 9.48561 12.4538 9.48481C12.4842 9.484 12.5146 9.48812 12.5431 9.49691C12.5716 9.50571 12.5977 9.51901 12.62 9.53606L15.4072 11.674C15.4303 11.6917 15.4488 11.7132 15.4614 11.737C15.474 11.7608 15.4805 11.7865 15.4805 11.8125C15.4805 11.8385 15.474 11.8641 15.4613 11.888C15.4487 11.9118 15.4303 11.9332 15.4071 11.951Z" />
            </g>
            <defs>
              <clipPath id="clip0_3_216">
                <rect
                  width="16.5"
                  height="18"
                  fill="white"
                  transform="translate(1)"
                />
              </clipPath>
            </defs>
          </svg>
        </li> */}
        {/* Education Icon*/}
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          className={`${navListStyle} ${isActive("/education") ? "bg-brand-primary" : "bg-brand-secondary hover:bg-brand-primary dark:bg-brand-primary-dark dark:hover:bg-brand-primary"}`}
        >
          <Link href="education">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${navIconStyle} ${isActive("/education") ? "fill-brand-primary-dark" : "fill-text-light dark:fill-brand-secondary"}`}
            >
              <g clipPath="url(#clip0_3_219)">
                <path d="M12.7636 11.272L9.25 14.6259L5.73638 11.272C3.10301 11.381 1 13.4376 1 15.9759V16.3134C1 17.245 1.79185 18.0009 2.76786 18.0009H15.7321C16.7081 18.0009 17.5 17.245 17.5 16.3134V15.9759C17.5 13.4376 15.397 11.381 12.7636 11.272ZM1.50089 2.80635L1.73661 2.85909V4.91221C1.47879 5.05987 1.29464 5.31651 1.29464 5.62589C1.29464 5.9212 1.46406 6.16729 1.70346 6.31846L1.12891 8.5087C1.06629 8.75128 1.20625 9.00089 1.40882 9.00089H2.94833C3.15089 9.00089 3.29085 8.75128 3.22824 8.5087L2.65368 6.31846C2.89308 6.16729 3.0625 5.9212 3.0625 5.62589C3.0625 5.31651 2.87835 5.05987 2.62054 4.91221V3.06299L5.05134 3.62198C4.7346 4.22667 4.53571 4.90167 4.53571 5.62589C4.53571 8.11143 6.64609 10.1259 9.25 10.1259C11.8539 10.1259 13.9643 8.11143 13.9643 5.62589C13.9643 4.90167 13.7691 4.22667 13.4487 3.62198L16.9954 2.80635C17.6657 2.65166 17.6657 1.85362 16.9954 1.69893L9.98292 0.0817384C9.50413 -0.0272461 8.99955 -0.0272461 8.52076 0.0817384L1.50089 1.69541C0.834263 1.8501 0.834263 2.65166 1.50089 2.80635Z" />
              </g>
              <defs>
                <clipPath id="clip0_3_219">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </motion.li>
        {/* Portfolio Icon */}
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          className={`${navListStyle} ${isActive("/projects") ? "bg-brand-primary" : "bg-brand-secondary hover:bg-brand-primary dark:bg-brand-primary-dark dark:hover:bg-brand-primary"}`}
        >
          <Link href="projects">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${navIconStyle} ${isActive("/projects") ? "fill-brand-primary-dark dark:fill-brand-primary-dark" : "fill-text-light dark:fill-brand-secondary"}`}
            >
              <g clipPath="url(#clip0_3_207)">
                <path d="M6.75 9.75V12H11.25V9.75H16.5V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V9.75H6.75ZM8.25 8.25H9.75V10.5H8.25V8.25ZM5.25 3.75V1.5C5.25 1.30109 5.32902 1.11032 5.46967 0.96967C5.61032 0.829018 5.80109 0.75 6 0.75H12C12.1989 0.75 12.3897 0.829018 12.5303 0.96967C12.671 1.11032 12.75 1.30109 12.75 1.5V3.75H15.75C15.9489 3.75 16.1397 3.82902 16.2803 3.96967C16.421 4.11032 16.5 4.30109 16.5 4.5V8.25H11.25V6.75H6.75V8.25H1.5V4.5C1.5 4.30109 1.57902 4.11032 1.71967 3.96967C1.86032 3.82902 2.05109 3.75 2.25 3.75H5.25ZM6.75 2.25V3.75H11.25V2.25H6.75Z" />
              </g>
              <defs>
                <clipPath id="clip0_3_207">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </motion.li>
        {/* Contact Icon */}
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          className={`${navListStyle} ${isActive("/contact") ? "bg-brand-primary" : "bg-brand-secondary hover:bg-brand-primary dark:bg-brand-primary-dark dark:hover:bg-brand-primary"}`}
        >
          <Link href="contact">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${navIconStyle} ${isActive("/contact") ? "fill-brand-primary-dark dark:fill-brand-primary-dark" : "fill-text-light dark:fill-brand-secondary"}`}
            >
              <g clipPath="url(#clip0_3_213)">
                <path d="M4.84125 14.25L1.5 16.875V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V13.5C16.5 13.6989 16.421 13.8897 16.2803 14.0303C16.1397 14.171 15.9489 14.25 15.75 14.25H4.84125Z" />
              </g>
              <defs>
                <clipPath id="clip0_3_213">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </motion.li>
      </ul>

      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 1.3 },
        }}
        onClick={handleDarkModeToggle}
        className={`group flex h-10 w-10 items-center justify-center rounded-full dark:bg-brand-primary-dark dark:hover:bg-brand-primary`}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="size-8"
          >
            <path
              className="fill-brand-secondary"
              d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-text-light hover:fill-brand-primary-dark`}
          >
            <g clipPath="url(#clip0_3_100)">
              <path d="M15.5 27C8.59625 27 3 21.4037 3 14.5C3 7.59625 8.59625 2 15.5 2C22.4037 2 28 7.59625 28 14.5C28 21.4037 22.4037 27 15.5 27ZM7.16125 20.0312C7.98286 21.2605 9.06683 22.2923 10.3351 23.0523C11.6034 23.8123 13.0245 24.2816 14.4959 24.4264C15.9674 24.5712 17.4526 24.3879 18.8448 23.8897C20.2369 23.3915 21.5012 22.5908 22.5466 21.5452C23.5921 20.4997 24.3927 19.2353 24.8908 17.8432C25.3888 16.451 25.572 14.9657 25.4271 13.4943C25.2822 12.0228 24.8127 10.6018 24.0526 9.3336C23.2925 8.06538 22.2606 6.98149 21.0312 6.16C21.5702 8.08278 21.5875 10.1144 21.0814 12.0461C20.5752 13.9778 19.5639 15.7398 18.1513 17.1513C16.74 18.5637 14.9781 19.5749 13.0467 20.081C11.1152 20.5872 9.08385 20.57 7.16125 20.0312Z" />
            </g>
            <defs>
              <clipPath id="clip0_3_100">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </motion.button>
    </nav>
  );
}

export default Navbar;
