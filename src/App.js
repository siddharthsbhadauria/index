import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Technology from './pages/Technology';
import Travel from './pages/Travel';

function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/travel">Travel</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Use element prop */}
        <Route path="/photography" element={<Photography />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </Router>
  );
}

export default App;