import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, selectedAlbum }) => {
  if (!selectedAlbum) {
    return (
      <div className="image-gallery">
        <p>Please select an album to view images</p>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.imageId} className="image-card">
          <div className="image-wrapper">
            <img src={`data:image/png;base64,${image.imageData}`} alt={image.imageName} />
          </div>
          <div className="image-details">
            <p>Uploaded by: {image.uploadedBy}</p>
            <p>Upload Date: {new Date(image.uploadDate).toLocaleDateString()}</p>
            <p>Description: {image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
