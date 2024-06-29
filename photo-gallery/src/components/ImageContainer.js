import React, { useState, useEffect, useCallback } from "react";
import ImageGallery from "./ImageGallery";
import { useAuth } from "./AuthProvider";
import { backendBaseUrl } from "../config";
import "./ImageContainer.css";

const ImageContainer = ({ selectedAlbum }) => {
  const [images, setImages] = useState([]);
  const { getUser } = useAuth();

  const fetchImages = useCallback(async () => {
    if (!selectedAlbum) return;

    try {
      const user = getUser();

      if (!user) throw new Error("User not logged in");

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

  const handleDeleteImage = () => {
    fetchImages();
  };

  return (
    <ImageGallery
      images={images}
      fetchImages={fetchImages}
      onDeleteImage={handleDeleteImage}
    />
  );
};

export default ImageContainer;
