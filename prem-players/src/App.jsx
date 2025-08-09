import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css'
import About from "./About";
import Home from "./Home";
import Club from './Club';
import ClubDetail from './ClubDetail';
import Nation from './Nation';
import NationDetail from './NationDetail';



function App() {
return(
<Router>
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/about" element={<About/>}/>

      <Route path="/clubs" element={<Club/>}/>
      <Route path="/clubs/:clubName" element={<ClubDetail/>}/>

      <Route path="/nationalities" element={<Nation/>}/>
      <Route path="/nationalities/:nationalityName" element={<NationDetail/>}/>


      </Routes>
    </Router>
  );
}

export default App
