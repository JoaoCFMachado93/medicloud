// ImageGallery.js

import React, { useState } from "react";
import "./ImageGallery.css";
import ImageDetailsPopup from "./ImageDetailsPopup"; // Import the ImageDetailsPopup component

const ImageGallery = ({ images }) => {
  const [showImageDetailsPopup, setShowImageDetailsPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageCardClick = (
    imageData,
    imageDescription,
    uploadedBy,
    uploadDate
  ) => {
    setSelectedImage({ imageData, imageDescription, uploadedBy, uploadDate });
    setShowImageDetailsPopup(true);
  };

  return (
    <div className="image-gallery">
      {/* Existing code to render images */}
      {images.map((image) => (
        <div
          key={image.imageId}
          className="image-card"
          onClick={() =>
            handleImageCardClick(
              image.imageData,
              image.description,
              image.uploadedBy,
              image.uploadDate
            )
          }
        >
          <div className="image-wrapper">
            <img
              src={`data:image/png;base64,${image.imageData}`}
              alt={image.imageName}
            />
          </div>
          <div className="image-details">
            <p>Uploaded by: {image.uploadedBy}</p>
            <p>
              Upload Date: {new Date(image.uploadDate).toLocaleDateString()}
            </p>
            <p>Description: {image.description}</p>
          </div>
        </div>
      ))}

      {/* Conditional rendering of ImageDetailsPopup */}
      {showImageDetailsPopup && selectedImage && (
        <ImageDetailsPopup
          imageData={selectedImage.imageData}
          imageDescription={selectedImage.imageDescription}
          uploadedBy={selectedImage.uploadedBy}
          uploadDate={selectedImage.uploadDate}
          onClose={() => setShowImageDetailsPopup(false)}
        />
      )}
    </div>
  );
};

export default ImageGallery;
