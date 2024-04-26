import React, { useState } from 'react';
import DirectoryContainer from './DirectoryContainer';
import ImageContainer from './ImageContainer';
import { useAuth } from './AuthProvider'; // Import useAuth hook
import './Home.css';

const Home = () => {
  const { userLogout } = useAuth(); // Destructure userLogout from useAuth
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [images] = useState([]);


  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    console.log('Selected album:', album);
  };

  const handleLogout = () => {
    userLogout();
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
            <button className="profile-button" onClick={handleLogout}>Logout</button> {/* Add logout button */}
          </div>
        </nav>
      </div>
      <div className="content">
        <div className="album-container">
          <DirectoryContainer onSelectAlbum={handleSelectAlbum} />
        </div>
        <ImageContainer images={images} selectedAlbum={selectedAlbum} />
      </div>
    </div>
  );
};

export default Home;
