import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';
import CreatePage from './components/CreatePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Event" element={<EventPage />} />
        <Route path="/Create" element={<CreatePage />} />

      </Routes>
    </div>
  );
}

export default App;
