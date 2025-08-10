import React from 'react';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css'

import About from "./About";
import Home from "./Home";
import Club from './Club';
import ClubDetail from './ClubDetail';
import Nation from './Nation';
import NationDetail from './NationDetail';
import Position from './Position';
import PostionDetail from './PositionDetail';
import Navbar from './Navbar'

import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});





return(
  <ThemeProvider theme={darkTheme}>
    <Router>
      <Navbar />
          <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<About/>}/>

          <Route path="/clubs" element={<Club/>}/>
          <Route path="/clubs/:clubName" element={<ClubDetail/>}/>

          <Route path="/nationalities" element={<Nation/>}/>
          <Route path="/nationalities/:nationalityName" element={<NationDetail/>}/>

          <Route path="/positions" element={<Position/>}/>
          <Route path="/positions/:positionName" element={<PostionDetail/>}/>


          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
