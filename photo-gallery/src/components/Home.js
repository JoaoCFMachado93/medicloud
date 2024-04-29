import React, { useState } from "react";
import DirectoryContainer from "./DirectoryContainer";
import ImageContainer from "./ImageContainer";
import { useAuth } from "./AuthProvider"; // Import useAuth hook
import { backendBaseUrl } from "../config";
import "./Home.css";

const Home = () => {
  const { getUser, userLogout } = useAuth(); // Destructure userLogout from useAuth
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [images, setImages] = useState([]);
  const [imageContainerKey, setImageContainerKey] = useState(0); // Add state for key

  const user = getUser();

  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album);
    console.log("Selected album:", album);
  };

  const handleLogout = () => {
    userLogout();
  };

  const handleImageAdded = async () => {
    // Call fetchImages again after adding an image to update the images for the selected album
    if (selectedAlbum) {
      try {
        const response = await fetch(
          `${backendBaseUrl}/images/directory/${selectedAlbum.directoryId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        console.log(data);
        setImages(data);
        setImageContainerKey((prevKey) => prevKey + 1); // Update key to force reload
      } catch (error) {
        console.error("Error fetching images:", error);
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
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="profile-button" onClick={handleLogout}>
              Logout
            </button>{" "}
            {/* Add logout button */}
          </div>
        </nav>
      </div>
      <div className="content">
        <div className="album-container">
          <DirectoryContainer
            onSelectAlbum={handleSelectAlbum}
            onImageAdded={handleImageAdded}
          />
        </div>
        <ImageContainer
          key={imageContainerKey}
          images={images}
          selectedAlbum={selectedAlbum}
        />{" "}
        {/* Use key to force reload */}
      </div>
    </div>
  );
};

export default Home;
