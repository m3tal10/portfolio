import ContactForm from "@/components/ContactForm";

function contact() {
  const listStyles =
    "dark:bg-brand-primary-dark flex w-full flex-col items-center justify-center gap-7 rounded-md bg-brand-secondary p-8 transition-all duration-1000 dark:text-brand-secondary";
  return (
    <main className="grid grid-cols-1 gap-6 overflow-y-scroll p-5 pt-8 scrollbar lg:grid-cols-[3fr_2fr] lg:overflow-visible lg:pb-10">
      <div className="flex flex-col gap-4 lg:gap-12">
        <p className="text-center text-xl font-extrabold md:text-2xl">
          Please Leave Me Your Info
        </p>
        <ContactForm />
      </div>
      <div className="flex flex-col gap-4 lg:gap-12">
        <p className="text-center text-xl font-extrabold md:text-2xl">
          Contact Information
        </p>
        <ul className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
          <li className="flex w-full flex-col items-center justify-center gap-7 rounded-md bg-brand-secondary p-8 transition-all duration-1000 dark:bg-brand-primary-dark dark:text-brand-secondary">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="flex flex-row justify-between">
                <span className="font-medium">Country: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  Bangladesh
                  <span>
                    <img
                      src="/Icons/Flag_of_Bangladesh.svg"
                      alt="Bangladesh Flag"
                      width="24px"
                    />
                  </span>
                </span>
              </p>

              <p className="flex flex-row justify-between">
                <span className="font-medium">City: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  Dhaka
                </span>
              </p>

              <p className="flex flex-row justify-between">
                <span className="font-medium">Street: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  Road-5/1, Titas road
                </span>
              </p>
              <p className="flex flex-row justify-between">
                <span className="font-medium">Postal Code: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  1219
                </span>
              </p>
            </div>
          </li>

          {/* Email */}
          <li className={listStyles}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="flex flex-row justify-between">
                <span className="font-medium">Email: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  rahimsheikh05@gmail.com
                </span>
              </p>

              <p className="flex flex-row justify-between">
                <span className="font-medium">Telegram: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  @m3tal10
                </span>
              </p>
            </div>
          </li>

          {/* Phone no */}
          <li className={listStyles}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="flex flex-row justify-between">
                <span className="font-medium">Office: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  <span>
                    <img
                      src="/Icons/Flag_of_Bangladesh.svg"
                      alt="Bangladesh Flag"
                      width="24px"
                    />
                  </span>
                  +8801716910519
                </span>
              </p>

              <p className="flex flex-row justify-between">
                <span className="font-medium">Personal: </span>
                <span className="flex items-center gap-1 text-text-light dark:text-text-light-dark">
                  <span>
                    <img
                      src="/Icons/Flag_of_Bangladesh.svg"
                      alt="Bangladesh Flag"
                      width="24px"
                    />
                  </span>
                  +8801716910519
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default contact;
