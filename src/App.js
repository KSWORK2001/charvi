
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Month from './pages/Month';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Memories from './pages/Memories';
import PhotosVideos from './pages/PhotosVideos';
import TugOfWar from './pages/TugOfWar';
import AboutCharvi from './pages/AboutCharvi';
import AboutKaran from './pages/AboutKaran';
import Letters from './pages/Letters';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Month />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/photos-videos" element={<PhotosVideos />} />
            <Route path="/tug-of-war" element={<TugOfWar />} />
            <Route path="/about-Charvi" element={<AboutCharvi />} />
            <Route path="/about-Karan" element={<AboutKaran />} />
            <Route path="/letters" element={<Letters />} />
            <Route path="/alphabets" element={<Alphabets />} />
          </Routes>
        </main>
        <Footer />
        <audio src={`${process.env.PUBLIC_URL}/Song.mp3`} autoPlay loop />
      </div>
    </Router>
  );
}

export default App;
