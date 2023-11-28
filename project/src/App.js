// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import NavBar from './Components/navigation';
import Home from './Components/Home';
import News from './Components/News';
import Science from './Components/Science';
import Observing from './Components/Observing';
import Spaceflight from './Components/Spaceflight';
import Footer from './Components/Footer';
import SolarStormPage from './Components/LearnMore/SolarStorm';
import Blackhole from './Components/LearnMore/Blackhole';
import './App.css';

const App = () => {
   return (
      <Router>
         <div>
            {/* Only render NavBar for specific routes */}
            <Routes>
               <Route path="/" element={<Navigate to="/home" />} />
               <Route path="/home" element={<><NavBar /><Home /><Footer /></>} />
               <Route path="/news" element={<><NavBar /><News /><Footer /></>} />
               <Route path="/science" element={<><NavBar /><Science /><Footer /></>} />
               <Route path="/observing" element={<><NavBar /><Observing /><Footer /></>} />
               <Route path="/spaceflight" element={<><NavBar /><Spaceflight /><Footer /></>} />
               {/* Exclude NavBar for the SolarStormPage */}
               <Route path="/learnmore/solarstorm" element={<><SolarStormPage /><Footer /></>} />
               {/* Exclude NavBar for the Blackhike */}
               <Route path="/learnmore/blackhole" element={<><Blackhole /><Footer /></>} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
