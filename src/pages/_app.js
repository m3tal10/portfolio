import "@/styles/globals.css";
import Layout from "@/components/Layout";
import DarkModeProvider from "@/contextAPI/DarkModeProvider";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}
