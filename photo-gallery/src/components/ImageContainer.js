// ImageContainer.js
import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";
import { useAuth } from "./AuthProvider";
import backendBaseUrl from "../config"; // Import the backend base URL

const ImageContainer = ({ selectedAlbum }) => {
  const [images, setImages] = useState([]);
  const { getUser } = useAuth();

  useEffect(() => {
    const fetchImages = async () => {
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
    };
    fetchImages();
  }, [selectedAlbum, getUser]);

  return <ImageGallery images={images} selectedAlbum={selectedAlbum} />;
};

export default ImageContainer;
