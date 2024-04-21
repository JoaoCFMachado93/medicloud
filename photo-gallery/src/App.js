// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import AlbumTree from './components/AlbumTree';
import ImageGallery from './components/ImageGallery';

const App = () => {
  const [directories, setDirectories] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [images, setImages] = useState([]);
  
  // Fetch directories from the backend when the component mounts
  useEffect(() => {
    const fetchDirectories = async () => {
      try {
        const response = await fetch('http://localhost:8080/directories');
        if (!response.ok) {
          throw new Error('Failed to fetch directories');
        }
        const data = await response.json();
        setDirectories(data);
      } catch (error) {
        console.error('Error fetching directories:', error);
      }
    };
    fetchDirectories();
  }, []);

  const handleSelectAlbum = async (album) => {
    setSelectedAlbum(album);
    console.log('Selected album:', album);
  
    // Call fetchImages immediately after setting selectedAlbum
    try {
      const response = await fetch(`http://localhost:8080/images/directory/${album.directoryId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageAdded = async () => {
    // Call fetchImages again after adding an image to update the images for the selected album
    if (selectedAlbum) {
      try {
        const response = await fetch(`http://localhost:8080/images/directory/${selectedAlbum.directoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
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
          <AlbumTree albums={directories} onSelectAlbum={handleSelectAlbum} onImageAdded={handleImageAdded} />
        </div>
        <ImageGallery images={images} selectedAlbum={selectedAlbum} />
      </div>
    </div>
  );
};

export default App;
