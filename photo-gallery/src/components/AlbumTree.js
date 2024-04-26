import React, { useState, useEffect, useRef } from "react";
import "./AlbumTree.css";
import AddImagePopup from "./AddImagePopup";
import { useAuth } from "./AuthProvider";
import {
  createParentDirectory,
  createSubDirectory,
} from "../services/DirectoryService"; // Import the function

const AlbumTree = ({ albums, onSelectAlbum, onImageAdded }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [subAlbums, setSubAlbums] = useState({});
  const [showAddImagePopup, setShowAddImagePopup] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const [showDropdownForAlbum, setShowDropdownForAlbum] = useState(null);
  const { getUser } = useAuth();
  const dropdownRef = useRef(null); // Ref to track dropdown element

  const user = getUser();
  const isAdmin = user && user.role.toUpperCase() === "ADMIN";

  useEffect(() => {
    // Function to handle clicks outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside of the dropdown
        if (!event.target.closest(".dropdown-menu")) {
          // Click didn't occur within the dropdown or its options
          setShowDropdownForAlbum(null);
        }
      }
    };

    // Add event listener to handle clicks outside of the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Run only once on component mount

  const handleAlbumClick = async (album) => {
    setSelectedAlbum(album);
    onSelectAlbum(album);

    // Toggle the display of child directories
    if (subAlbums[album.directoryId]) {
      setSubAlbums((prevState) => ({
        ...prevState,
        [album.directoryId]: null,
      }));
    } else {
      try {
        if (!user) {
          throw new Error("User not logged in");
        }

        const response = await fetch(
          `http://localhost:8080/directories/subDirectories/${album.directoryId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const data = await response.json();
        setSubAlbums((prevState) => ({
          ...prevState,
          [album.directoryId]: data,
        }));
      } catch (error) {
        console.error("Error fetching subdirectories:", error);
      }
    }
  };

  const handleAddImageButtonClick = (albumId) => {
    setCurrentAlbumId(albumId);
    setShowAddImagePopup(true);
    // Close the dropdown
    setShowDropdownForAlbum(null);
  };

  const handleCreateParentDirectory = async () => {
    const user = getUser();

    const directoryName = prompt("Enter the name of the new parent directory:");
    if (!directoryName) {
      return; // User canceled
    }

    const success = await createParentDirectory(directoryName, user.token); // Use the function
    if (success) {
      // Refresh the page to fetch the updated directory structure
      window.location.reload();
    } else {
      alert("Failed to create parent directory. Please try again.");
    }
  };

  const handleCreateSubDirectory = async (parentDirectoryId) => {
    const user = getUser();

    const directoryName = prompt("Enter the name of the new sub-directory:");
    if (!directoryName) {
      // Close the dropdown if the user cancels
      setShowDropdownForAlbum(null);
      return; // User canceled
    }

    try {
      const updatedData = await createSubDirectory(
        parentDirectoryId,
        directoryName,
        user.token
      );
      if (updatedData) {
        const response = await fetch(
          `http://localhost:8080/directories/subDirectories/${parentDirectoryId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sub-directories");
        }
        const data = await response.json();
        setSubAlbums((prevState) => ({
          ...prevState,
          [parentDirectoryId]: data,
        }));
      } else {
        throw new Error("Failed to create sub-directory");
      }
    } catch (error) {
      console.error("Error creating sub-directory:", error);
      alert("Failed to create sub-directory. Please try again.");
    }

    // Close the dropdown after attempting to create the sub-directory
    setShowDropdownForAlbum(null);
  };

  const toggleDropdown = (albumId, e) => {
    e.stopPropagation(); // Prevent event propagation
    setShowDropdownForAlbum((prevAlbumId) =>
      prevAlbumId === albumId ? null : albumId
    );
  };

  const renderDropdown = (albumId) => {
    return (
      <div className="dropdown" ref={dropdownRef}>
        {isAdmin && (
          <button
            className="dropdown-toggle"
            type="button"
            onClick={(e) => toggleDropdown(albumId, e)}
          >
            ...
          </button>
        )}
        {showDropdownForAlbum === albumId && (
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              onClick={() => handleAddImageButtonClick(albumId)}
            >
              Add Image
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleCreateSubDirectory(albumId)}
            >
              Create Sub-directory
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderAlbums = (albums) => {
    return albums.map((album) => (
      <li key={album.directoryId}>
        <div
          className={`album ${selectedAlbum === album ? "selected" : ""}`}
          onClick={() => handleAlbumClick(album)}
        >
          {album.directoryName}
          {renderDropdown(album.directoryId)}
        </div>
        {subAlbums[album.directoryId] &&
          subAlbums[album.directoryId].length > 0 && (
            <ul className="sub-albums">
              {renderAlbums(subAlbums[album.directoryId])}
            </ul>
          )}
      </li>
    ));
  };

  return (
    <div className="album-tree">
      {isAdmin && (
        <button
          className="create-directory-button"
          onClick={handleCreateParentDirectory}
        >
          Create New Album
        </button>
      )}
      <ul>{renderAlbums(albums)}</ul>
      {showAddImagePopup && (
        <AddImagePopup
          directoryId={currentAlbumId}
          onClose={() => {
            setShowAddImagePopup(false);
            onImageAdded();
          }}
        />
      )}
    </div>
  );
};

export default AlbumTree;
