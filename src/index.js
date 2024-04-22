import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Causes } from "./Constent";
import Effect from "./component/Effect";
import Solution from "./component/Solution";
import GlobvsCli from "./component/GlobvsCli";
import Footer from "./component/Footer";
import { Auth0Provider } from "@auth0/auth0-react";
import Challanges from "./component/Challanges";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-2b2ao3amfvhocg53.us.auth0.com"
      clientId="3k4soPmwC4hJEJNgeydw0h32fhvj35SM"
      redirectUri={window.location.origin}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Causes" element={<Causes />} />
        <Route path="/about us" element={<About />} />
        <Route path="/Effect" element={<Effect />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Glob_vs_Cli" element={<GlobvsCli />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/Quiz" element={<Challanges />} />
      </Routes>
    </Auth0Provider>
  </BrowserRouter>
);

reportWebVitals();
