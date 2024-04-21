// AlbumTree.js
import React, { useState } from 'react';
import './AlbumTree.css';
import AddImagePopup from './AddImagePopup';

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
  
    try {
      const response = await fetch('http://localhost:8080/directories', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            directoryName,
          }
        ]),
      });
  
      if (response.ok) {
        // Parent directory created successfully
        console.log('Parent directory created successfully:', directoryName);
        // Refresh the page to fetch the updated directory structure
        window.location.reload();
      } else {
        // Handle error
        console.error('Failed to create parent directory:', response.status);
        alert('Failed to create parent directory. Please try again.');
      }
    } catch (error) {
      console.error('Error creating parent directory:', error);
      alert('An error occurred while creating the parent directory. Please try again.');
    }
  };
  
  

  const handleCreateSubDirectory = async (parentDirectoryId) => {
    const directoryName = prompt('Enter the name of the new sub-directory:');
    if (!directoryName) {
      // Close the dropdown if the user cancels
      setShowDropdownForAlbum(null);
      return; // User canceled
    }
  
    try {
      const response = await fetch(`http://localhost:8080/directories/subDirectories/${parentDirectoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            directoryName,
            parentDirectory: parentDirectoryId,
          }
        ]),
      });
  
      if (response.ok) {
        // Sub-directory created successfully
        // Fetch the updated directory structure
        const updatedResponse = await fetch(`http://localhost:8080/directories/subDirectories/${parentDirectoryId}`);
        const updatedData = await updatedResponse.json();
        setSubAlbums((prevState) => ({ ...prevState, [parentDirectoryId]: updatedData }));
      } else {
        // Handle error
        console.error('Failed to create sub-directory:', response.status);
        alert('Failed to create sub-directory. Please try again.');
      }
    } catch (error) {
      console.error('Error creating sub-directory:', error);
      alert('An error occurred while creating the sub-directory. Please try again.');
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
    return (
      <div>
        <button className="create-directory-button" onClick={handleCreateParentDirectory}>Create New Album</button>
        <ul>{albums.map((album) => (
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
        ))}
        </ul>
      </div>
    );
  };
  

  return (
    <div className="album-tree">
      <ul>{renderAlbums(albums)}</ul>
      {showAddImagePopup && (
        <AddImagePopup directoryId={currentAlbumId} onClose={() => { setShowAddImagePopup(false); onImageAdded(); }} />
      )}
    </div>
  );
};

export default AlbumTree;
