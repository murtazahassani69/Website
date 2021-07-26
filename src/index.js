import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import icon from "./Routes/imgs/tab_logo.png";
import { AppProvider } from "../src/Routes/Components/Demo/CVTemplates/MurtazaTemplate/CV2/Context";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "flag-icon-css/css/flag-icon.min.css";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "gr"],
    fallbackLng: "en",
    debug: false,

    /*=============================+
 |OPTIONS FOR LANGUAGE DETECTOR|
 +=============================*/
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

ReactDOM.render(
  <>
  {/* <React.StrictMode> */}
    <Helmet>
      <meta charSet="utf-8" />
      <title>Eksi Nous</title>
      <link rel="shortcut icon" href={icon} />
    </Helmet>
    <Suspense fallback={loadingMarkup}>
      <AppProvider>
        <App />
      </AppProvider>
    </Suspense>
  {/* </React.StrictMode>, */}
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
