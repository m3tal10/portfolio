import { motion } from "framer-motion";
import Link from "next/link";
function education() {
  const listStyles =
    "grid grid-cols-[2fr_3fr] hover:cursor-pointer gap-10 border-t-2 pt-10 transition-all duration-300 hover:border-t-text-light lg:gap-32";
  const leftSpanStyles =
    "text-sm text-text-light dark:text-text-light-dark md:text-base";
  const rightSpanStyles = "";
  return (
    <main className="mt-8 flex flex-col items-center gap-8 overflow-y-auto p-3 pb-5 scrollbar dark:text-brand-secondary lg:gap-20 lg:pb-10">
      <p className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Education &amp; Certifications
      </p>

      <ul className="flex flex-col gap-10 rounded-md bg-brand-secondary p-6 transition-colors duration-1000 dark:bg-brand-primary-dark">
        <li className="grid grid-cols-[2fr_3fr] gap-10 hover:cursor-pointer lg:gap-32">
          <div className="block items-start">
            <p className="mb-4 flex items-center justify-start text-sm font-medium md:gap-4 md:text-xl">
              <img
                src="/images/uop_logo.png"
                alt="University of the people logo"
                className="hidden md:block md:w-10"
              />
              <span>University of the People</span>
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
            <div className="text-text-light dark:text-text-light-dark">
              I&apos;m currently pursuing my bachelor&apos;s degree at Uopeople.
              Some of my achievements are:
              <ul className="list-disc">
                <li> 10 times President&apos;s list honor.</li>
                <li> 2 times Dean&apos;s list honor.</li>
                <li> Uopeople ambassador.</li>
                <li>
                  Sustainability Badge for contributing to Uopeople&apos;s
                  global sustainability program.
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Certificate 01 */}
        <li className={listStyles}>
          <div className="block items-start">
            <p className="mb-4 flex items-center justify-start text-sm font-medium md:gap-4 md:text-xl">
              <img
                src="/images/ibm_logo.png"
                alt="University of the people logo"
                className="hidden md:block md:w-10"
              />
              <span>International Business Machines Corporation</span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Year:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2024
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>Verify:</span>
              <Link
                href="https://coursera.org/share/a7913a4039bf6bba8e7ddac53c741703"
                target="_blank"
                className="text-sm text-blue-400 underline"
              >
                Verification Link
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Developing Front-End Apps with React
            </p>
            <div className="text-text-light dark:text-text-light-dark">
              I have gained comprehensive knowledge and hands-on experience
              throughout this course. Below are some of the key concepts and
              skills I have developed during my learning journey:
              <ul className="list-disc">
                <li>
                  {" "}
                  Developed interactive user interfaces (UIs) and web
                  applications using <strong> JavaScript</strong> technologies
                  including
                  <strong> React</strong> ,<strong>JSX</strong>, and
                  <strong> ES6</strong>.
                </li>
                <li>
                  {" "}
                  Built dynamic front-end applications using reusable{" "}
                  <strong> React</strong> components.
                </li>
                <li>
                  {" "}
                  Employed <strong> React</strong> concepts such as props,
                  states, hooks, forms, and <strong> Redux</strong>.
                </li>
                <li>
                  Demonstrated React skills by building several front-end
                  applications.
                </li>
                <li>
                  Gained expertise in <strong> React</strong> (Web Framework),
                  Front-end Development, Web Development,{" "}
                  <strong> JavaScript</strong>, and User Interface Design.
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Certificate 02 */}
        <li className={listStyles}>
          <div className="block items-start">
            <p className="mb-4 flex items-center justify-start text-sm font-medium md:gap-4 md:text-xl">
              <img
                src="/images/ibm_logo.png"
                alt="University of the people logo"
                className="hidden md:block md:w-10"
              />
              <span>International Business Machines Corporation</span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Year
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2024
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>Verify:</span>
              <Link
                href="https://coursera.org/share/131ca1e118f65faf9760324476f639eb"
                target="_blank"
                className="text-sm text-blue-400 underline"
              >
                Verification Link
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">Git & GitHub Essentials</p>
            <div className="text-text-light dark:text-text-light-dark">
              I have gained comprehensive knowledge and hands-on experience
              throughout this course. Below are some of the key concepts and
              skills I have developed during my learning journey:
              <ul className="list-disc">
                <li>
                  {" "}
                  Learned version control concepts and its importance in social
                  and collaborative coding, particularly in DevOps.
                </li>
                <li>
                  {" "}
                  Mastered basic Git concepts like repositories and branches for
                  distributed version control and social coding.
                </li>
                <li>
                  {" "}
                  Learned to Create GitHub repositories and branches, performed
                  pull requests (PRs) and merge operations for team
                  collaboration.
                </li>
                <li>
                  Learned to Build a portfolio by creating and sharing an
                  open-source project on GitHub.
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Certificate 03 */}
        <li className={listStyles}>
          <div className="block items-start">
            <p className="mb-4 flex items-center justify-start text-sm font-medium md:gap-4 md:text-xl">
              <img
                src="/images/ibm_logo.png"
                alt="University of the people logo"
                className="hidden md:block md:w-10"
              />
              <span>International Business Machines Corporation</span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className="text-sm text-text-light dark:text-text-light-dark md:text-base">
                Year:
              </span>
              <span className="rounded-md bg-text-light p-1 text-xs font-extrabold text-brand-secondary transition duration-300 hover:bg-brand-primary hover:text-brand-primary-dark">
                2024
              </span>
            </p>
            <p className="mb-4 flex items-center justify-between text-sm md:text-lg">
              <span className={leftSpanStyles}>Verify:</span>
              <Link
                href="https://coursera.org/share/dbe65f49c83e7448d2ee3870fa8943b3"
                target="_blank"
                className="text-sm text-blue-400 underline"
              >
                Verification Link
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <p className="font-medium md:text-xl">
              Web Development with HTML, CSS, JavaScript
            </p>
            <div className="text-text-light dark:text-text-light-dark">
              Despite having previous experience, this journey helped me to
              build a solid foundation of web development. Below are some of the
              key concepts and skills I have developed during my learning
              journey:
              <ul className="list-disc">
                <li>
                  {" "}
                  Deep understanding of <strong>HTML</strong> ,{" "}
                  <strong>CSS</strong> , and <strong>Javascript</strong> .
                </li>
                <li>
                  Features of IDE such as <strong>VSCode</strong> extensions
                  like prettier, and es-lint etc.
                </li>
                <li>
                  Best industry practices of web development from IBM
                  professionals.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default education;
