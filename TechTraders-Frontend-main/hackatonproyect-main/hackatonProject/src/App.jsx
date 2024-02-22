import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView.jsx';
import NavBar from './components/Navbar/Navbar';
import MovilesView from './Views/MovilesView.jsx'
import TabletsView from './Views/TabletsView.jsx';;
import LaptopsView from './Views/LaptopsView.jsx'
import ConsoleView  from './Views/ConsoleView.jsx';
import AuricularesView from './Views/AuricularesView.jsx';
import Footer from './components/Footer/Footer.jsx';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/phone" element={<MovilesView />} />
        <Route path="/tablet" element={<TabletsView />} />
        <Route path="/pc" element={<LaptopsView />} />
        <Route path="/console"element={<ConsoleView />} />
        <Route path="/head" element={<AuricularesView />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;
