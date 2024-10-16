import "@/styles/globals.css";
import Layout from "@/components/Layout";
import DarkModeProvider from "@/contextAPI/DarkModeProvider";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <DarkModeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.pathname}
            className="overflow-x-hidden overflow-y-scroll scrollbar"
          >
            <motion.div
              className="absolute left-0 top-0 z-10 h-full w-full origin-bottom bg-yellow-500 dark:bg-brand-primary-dark"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
            <Component {...pageProps} />

            <motion.div
              className="absolute left-0 top-0 z-10 h-full w-full origin-top bg-yellow-500 dark:bg-brand-primary-dark"
              initial={{
                scaleY: 1,
              }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.8 }}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </DarkModeProvider>
  );
}
