import React, { useState } from 'react';
import './ImageDetailsPopup.css';

const ImageDetailsPopup = ({ imageData, imageDescription, uploadedBy, uploadDate, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleImageClick = () => {
    // Decode base64-encoded image data into a Uint8Array
    const imageDataUint8 = Uint8Array.from(atob(imageData), c => c.charCodeAt(0));
    // Create a Blob object from the Uint8Array
    const blob = new Blob([imageDataUint8], { type: 'image/png' });
    // Create a URL for the Blob object
    const imageUrl = URL.createObjectURL(blob);
    // Open the Blob URL in a new tab
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="image-details-popup-overlay" onClick={onClose}>
      <div className="image-details-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="enlarged-image-wrapper" style={{ height: `${60 * zoomLevel}%` }}>
          <img
            src={`data:image/png;base64,${imageData}`}
            alt="myImage"
            className="enlarged-image"
            style={{ transform: `scale(${zoomLevel})` }}
            onClick={handleImageClick} // Add click event handler
          />
        </div>
        <div className="image-controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
        <div className="image-details-container">
          <p>Uploaded by: {uploadedBy}</p>
          <p>Upload Date: {new Date(uploadDate).toLocaleDateString()}</p>
          <textarea
            className="description-textarea"
            value={imageDescription}
            readOnly // Make the textarea read-only to prevent editing
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsPopup;
