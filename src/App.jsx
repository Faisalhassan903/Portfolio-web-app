
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebaar';
import Home from './components/Home';
import Bio from './components/Bio';
import HireMe from './components/Hireme';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex" style={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh' }}>
        <Sidebar />
        <div className="content" style={{ flex: 1, padding: '30px', marginLeft: '200px' }}>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/hireme" element={<HireMe />} />
          </Routes>
          {/* Footer positioned here to make it visible across all routes */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
