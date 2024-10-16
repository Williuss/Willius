import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hero from "./Hero";
import AboutME from "./AboutMe";
import Saturn from "./Saturn";
import Portfolio from "./Portfolio";
import Certificate from './Certificate';
import Contact from './Contact';
import End from './End';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Hero />
    <AboutME />
    <Saturn />
    <Portfolio />
    <Certificate /> 
    <Contact />
    <End />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
