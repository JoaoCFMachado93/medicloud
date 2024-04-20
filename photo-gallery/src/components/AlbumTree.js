import React, { useState } from 'react';
import './AlbumTree.css';
import AddImagePopup from './AddImagePopup';

const AlbumTree = ({ albums, onSelectAlbum }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [subAlbums, setSubAlbums] = useState({});
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const handleAlbumClick = async (album) => {
    setSelectedAlbum(album);
    onSelectAlbum(album);

    try {
      const response = await fetch(`http://localhost:8080/directories/subDirectories/${album.directoryId}`);
      const data = await response.json();
      setSubAlbums((prevState) => ({ ...prevState, [album.directoryId]: data }));
    } catch (error) {
      console.error('Error fetching subdirectories:', error);
    }
  };

  const handleAddImageButtonClick = (albumId) => {
    setCurrentAlbumId(albumId);
    setShowAddImagePopup(true);
  };

  const handlePopupClose = () => {
    setShowAddImagePopup(false);
  };

  const renderAlbums = (albums) => {
    return albums.map((album) => (
      <li key={album.directoryId}>
        <div
          className={`album ${selectedAlbum === album ? 'selected' : ''}`}
          onClick={() => handleAlbumClick(album)}
        >
          {album.directoryName}
          <button className="add-image-button" onClick={() => handleAddImageButtonClick(album.directoryId)}>
            +
          </button>
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
      <ul>{renderAlbums(albums)}</ul>
      {showAddImagePopup && (
        <AddImagePopup directoryId={currentAlbumId} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default AlbumTree;
