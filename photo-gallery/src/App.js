// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import AlbumTree from './components/AlbumTree';
import ImageGallery from './components/ImageGallery';
import head1 from './assets/head1.jpeg';
import head2 from './assets/head2.jpeg';
import braco1 from './assets/braco1.jpeg';
import braco2 from './assets/braco2.jpeg';
import leg1 from './assets/leg1.jpeg';
import leg2 from './assets/leg2.jpeg';



const App = () => {

    // State to store fetched directories
    const [directories, setDirectories] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
  
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

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    console.log('Selected album:', album);
  };

  // Dummy albums with sub-albums for testing
  // const albums = [
  //   { id: 1, name: 'Cabeça' },
  //   { id: 2, name: 'Membros Superiores', subAlbums: [{ id: 4, name: 'Braço' }, { id: 5, name: 'Mão' }] },
  //   { id: 3, name: 'Pernas' }
  // ];

  // Dummy images for testing
// Dummy images for testing
// const images = [
//   { id: 1, albumId: 4, url: braco1, user: 'User 1', date: '2024-03-19', description: 'Beautiful landscape' },
//   { id: 7, albumId: 4, url: braco2, user: 'User 1', date: '2024-03-19', description: 'Beautiful landscape' },
//   { id: 2, albumId: 5, url: head1, user: 'User 2', date: '2024-03-18', description: 'Exotic destination' },
//   { id: 3, albumId: 1, url: head2, user: 'User 1', date: '2024-03-17', description: 'Sunny beach' },
//   { id: 4, albumId: 1, url: head1, user: 'User 2', date: '2024-03-16', description: 'Historic city' },
//   { id: 5, albumId: 3, url: leg2, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 6, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 7, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 8, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 9, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 10, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 11, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 12, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' },
//   { id: 13, albumId: 3, url: leg1, user: 'User 1', date: '2024-03-15', description: 'Cultural landmark' }
// ];


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
        <AlbumTree albums={directories} onSelectAlbum={handleSelectAlbum} />
      </div>
      <ImageGallery images={[]} selectedAlbum={selectedAlbum} />
    </div>
  </div>
);
};

export default App;
