import { motion } from "framer-motion";
function education() {
  const listStyles =
    "grid grid-cols-[2fr_3fr] gap-10 border-t-2 pt-10 transition-all duration-300 hover:border-t-text-light lg:gap-40";
  const leftSpanStyles =
    "text-sm text-text-light dark:text-text-light-dark md:text-base";
  const rightSpanStyles = "";
  return (
    <main className="mt-8 flex flex-col items-center gap-8 overflow-y-auto p-3 pb-5 scrollbar dark:text-brand-secondary lg:gap-20 lg:pb-10">
      <p className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Education
      </p>

      <ul className="flex flex-col gap-10 rounded-md bg-brand-secondary p-6 transition-colors duration-1000 dark:bg-brand-primary-dark">
        <li className="grid grid-cols-[2fr_3fr] gap-10 lg:gap-40">
          <div className="block items-start">
            <p className="mb-4 text-sm font-medium md:text-xl">
              University of the People
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Graduation:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2026
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>CGPA:</span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                3.98
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Computer Science & Engineering.
            </p>
            <p className="text-text-light dark:text-text-light-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>

        {/* Certificate 01 */}
        <li className="grid grid-cols-[2fr_3fr] gap-10 border-t-2 pt-10 transition-all duration-300 hover:border-t-text-light lg:gap-40">
          <div className="block items-start">
            <p className="mb-4 text-sm font-medium md:text-xl">
              University of the People
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Graduation:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2026
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>CGPA:</span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                3.98
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Computer Science & Engineering.
            </p>
            <p className="text-text-light dark:text-text-light-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
        {/* Certificate 02 */}
        <li className={listStyles}>
          <div className="block items-start">
            <p className="mb-4 text-sm font-medium md:text-xl">
              University of the People
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Graduation:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2026
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>CGPA:</span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                3.98
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Computer Science & Engineering.
            </p>
            <p className="text-text-light dark:text-text-light-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
        {/* Certificate 03 */}
        <li className={listStyles}>
          <div className="block items-start">
            <p className="mb-4 text-sm font-medium md:text-xl">
              University of the People
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Graduation:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2026
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>CGPA:</span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                3.98
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Computer Science & Engineering.
            </p>
            <p className="text-text-light dark:text-text-light-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar
              quisque sed amet, nulla nunc. Eleifend sodales posuere fusce
              tempus etiam et pellentesque. Molestie risus enim neque eget dui.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default education;
