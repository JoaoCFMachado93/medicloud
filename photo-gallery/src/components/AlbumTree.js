// AlbumTree.js
import React, { useState } from 'react';
import './AlbumTree.css';
import AddImagePopup from './AddImagePopup';
import { createParentDirectory, createSubDirectory } from '../services/DirectoryService'; // Import the function

const AlbumTree = ({ albums, onSelectAlbum, onImageAdded }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [subAlbums, setSubAlbums] = useState({});
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const [showDropdownForAlbum, setShowDropdownForAlbum] = useState(null);

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
    // Close the dropdown
    setShowDropdownForAlbum(null);
  };

  const handleCreateParentDirectory = async () => {
    const directoryName = prompt('Enter the name of the new parent directory:');
    if (!directoryName) {
      return; // User canceled
    }

    const success = await createParentDirectory(directoryName); // Use the function
    if (success) {
      // Refresh the page to fetch the updated directory structure
      window.location.reload();
    } else {
      alert('Failed to create parent directory. Please try again.');
    }
  };

  const handleCreateSubDirectory = async (parentDirectoryId) => {
    const directoryName = prompt('Enter the name of the new sub-directory:');
    if (!directoryName) {
      // Close the dropdown if the user cancels
      setShowDropdownForAlbum(null);
      return; // User canceled
    }

    const updatedData = await createSubDirectory(parentDirectoryId, directoryName);
    if (updatedData) {
      setSubAlbums((prevState) => ({ ...prevState, [parentDirectoryId]: updatedData }));
    } else {
      alert('Failed to create sub-directory. Please try again.');
    }

    // Close the dropdown after attempting to create the sub-directory
    setShowDropdownForAlbum(null);
  };

  const toggleDropdown = (albumId) => {
    setShowDropdownForAlbum((prevAlbumId) => (prevAlbumId === albumId ? null : albumId));
  };

  const renderDropdown = (albumId) => {
    return (
      <div className="dropdown">
        <button className="dropdown-toggle" type="button" onClick={() => toggleDropdown(albumId)}>
          ...
        </button>
        {showDropdownForAlbum === albumId && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => handleAddImageButtonClick(albumId)}>Add Image</button>
            <button className="dropdown-item" onClick={() => handleCreateSubDirectory(albumId)}>Create Sub-directory</button>
          </div>
        )}
      </div>
    );
  };

  const renderAlbums = (albums) => {
    return albums.map((album) => (
      <li key={album.directoryId}>
        <div
          className={`album ${selectedAlbum === album ? 'selected' : ''}`}
          onClick={() => handleAlbumClick(album)}
        >
          {album.directoryName}
          {renderDropdown(album.directoryId)}
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
      <button className="create-directory-button" onClick={handleCreateParentDirectory}>Create New Album</button>
      <ul>{renderAlbums(albums)}</ul>
      {showAddImagePopup && (
        <AddImagePopup directoryId={currentAlbumId} onClose={() => { setShowAddImagePopup(false); onImageAdded(); }} />
      )}
    </div>
  );
};

export default AlbumTree;
