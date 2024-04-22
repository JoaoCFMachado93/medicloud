// App.js
import React, { useState } from 'react';
import './App.css';
import DirectoryContainer from './components/DirectoryContainer';
import ImageContainer from './components/ImageContainer';

const App = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    console.log('Selected album:', album);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <h1 className="logo-main">EndoScope</h1>
          <p className="logo-sub">Atlas of Gastrointestinal Endoscopy</p>
        </div>
        <nav className="navbar">
          <div className="navbar-right">
            <button className="search-button">Search</button>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="profile-button">Profile</button>
          </div>
        </nav>
      </div>
      <div className="content">
        <div className="album-container">
          <DirectoryContainer onSelectAlbum={handleSelectAlbum} />
        </div>
        <ImageContainer selectedAlbum={selectedAlbum} />
      </div>
    </div>
  );
};

export default App;
