// DirectoryContainer.js
import React, { useState, useEffect } from 'react';
import AlbumTree from './AlbumTree';

const DirectoryContainer = ({ onSelectAlbum }) => {
  const [directories, setDirectories] = useState([]);

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

  return <AlbumTree albums={directories} onSelectAlbum={onSelectAlbum} />;
};

export default DirectoryContainer;
