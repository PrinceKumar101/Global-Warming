import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {About, Causes} from "./Constent"
import Effect from './component/Effect';
import Solution from './component/Solution';
import GlobvsCli from './component/GlobvsCli';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path= "/"  element= {<App/>} />
      <Route path="/Causes"  element= {<Causes/>} />
      <Route path="/about us"  element= {<About/>} />
      <Route path='/Effect' element = {<Effect/>}/>
      <Route path='/Solution' element = {<Solution/>}/>
      <Route path='/Glob_vs_Cli' element = {<GlobvsCli/>}/>
      <Route path='/contact' element = {<Footer/>}/>
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
