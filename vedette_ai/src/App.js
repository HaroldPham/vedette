import React from 'react';
import './App.css';
import NavBar from './Navbar';
import SolutionPage from './SolutionPage';
import TeamPage from './TeamPage';
import MilestonePage from './MilestonePage';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Page routes */}
      <Routes>
        <Route index element={<SolutionPage />} />
        <Route path='team' element={<TeamPage />} />
        <Route path='milestones' element={<MilestonePage />} />
      </Routes>
    </div>
  );
}

export default App;
