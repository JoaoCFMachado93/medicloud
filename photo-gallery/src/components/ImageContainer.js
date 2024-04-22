// ImageContainer.js
import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';

const ImageContainer = ({ selectedAlbum }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!selectedAlbum) return;

      try {
        const response = await fetch(`http://localhost:8080/images/directory/${selectedAlbum.directoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [selectedAlbum]);

  return <ImageGallery images={images} selectedAlbum={selectedAlbum} />;
};

export default ImageContainer;
