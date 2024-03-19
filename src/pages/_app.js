// Import appWithTranslation из next-i18next
import Header from "@/components/Header/Header";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "../i18n";
import { Suspense } from "react";

function App({ Component, pageProps }) {
  return (
    <>
      <Suspense >
        <Header />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}

export default App;
