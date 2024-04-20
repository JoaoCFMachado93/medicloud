import React, { useState } from 'react';
import './AlbumTree.css';

const AlbumTree = ({ albums, onSelectAlbum }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [subAlbums, setSubAlbums] = useState({});

  const handleAlbumClick = async (album) => {
    setSelectedAlbum(album);
    onSelectAlbum(album); 

    try {
      const response = await fetch(`http://localhost:8080/directories/subDirectories/${album.directoryId}`);
      const data = await response.json();
      setSubAlbums(prevState => ({ ...prevState, [album.directoryId]: data }));
    } catch (error) {
      console.error('Error fetching subdirectories:', error);
    }
  };

  const renderAlbums = (albums) => {
    return albums.map(album => (
      <li key={album.directoryId}>
        <div
          className={`album ${selectedAlbum === album ? 'selected' : ''}`}
          onClick={() => handleAlbumClick(album)}
        >
          {album.directoryName}
        </div>
        {subAlbums[album.directoryId] && subAlbums[album.directoryId].length > 0 && (
          <ul className="sub-albums">
            {renderAlbums(subAlbums[album.directoryId])}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="album-tree">
      <ul>
        {renderAlbums(albums)}
      </ul>
    </div>
  );
};

export default AlbumTree;
