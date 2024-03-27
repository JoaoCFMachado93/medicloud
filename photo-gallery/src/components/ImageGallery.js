import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, selectedAlbum }) => {
  // Check if selectedAlbum is defined
  if (!selectedAlbum) {
    return (
      <div className="image-gallery">
        <p>Please select an album to view images</p>
      </div>
    );
  }

  // Filter images based on selected album
  const filteredImages = images.filter(image => image.albumId === selectedAlbum.id);

  return (
    <div className="image-gallery">
      {filteredImages.map(image => (
        <div key={image.id} className="image-card">
          <a href={image.url} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
            <img src={image.url} alt={image.description} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </a>
          <div className="image-details">
            <p>Uploaded by: {image.user}</p>
            <p>Date: {image.date}</p>
            <p>Description: {image.description}</p>
          </div>
        </div>
      ))}
      {filteredImages.length === 0 && <p>No images found for the selected album</p>}
    </div>
  );
};

export default ImageGallery;
