import '@/styles/main.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

  

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  return <Component {...pageProps} />
}
