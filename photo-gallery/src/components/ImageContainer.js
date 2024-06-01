import React, { useState, useEffect, useCallback } from "react";
import ImageGallery from "./ImageGallery";
import { useAuth } from "./AuthProvider";
import { backendBaseUrl } from "../config";
import "./ImageContainer.css"; // Import the CSS file for styling

const ImageContainer = ({ selectedAlbum, directoryDescription }) => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState(directoryDescription);
  const [isEditing, setIsEditing] = useState(false);
  const { getUser } = useAuth();

  const fetchImages = useCallback(async () => {
    if (!selectedAlbum) return;

    try {
      const user = getUser();

      if (!user) {
        throw new Error("User not logged in");
      }

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
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }, [selectedAlbum, getUser]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    setDescription(directoryDescription);
  }, [directoryDescription]);

  const handleDeleteImage = () => {
    fetchImages();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveDescription = async () => {
    try {
      const user = getUser();

      if (!user) {
        throw new Error("User not logged in");
      }

      const response = await fetch(`${backendBaseUrl}/directories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          directoryId: selectedAlbum.directoryId,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update description");
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating description:", error);
    }
  };

  const user = getUser();
  const isAdmin = user && user.role.toUpperCase() === "ADMIN";

  return (
    <div>
      <div className="directory-description">
        {isAdmin && isEditing ? (
          <div>
            <textarea
              className="description-textarea"
              value={description}
              onChange={handleDescriptionChange}
            />
            <div className="button-group">
              <button className="btn save-btn" onClick={handleSaveDescription}>
                Save
              </button>
              <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>{description}</p>
            {isAdmin && (
              <button className="btn edit-btn" onClick={() => setIsEditing(true)}>
                Add or Edit Album Description
              </button>
            )}
          </div>
        )}
      </div>
      <ImageGallery
        images={images}
        selectedAlbum={selectedAlbum}
        onDeleteImage={handleDeleteImage}
      />
    </div>
  );
};

export default ImageContainer;
