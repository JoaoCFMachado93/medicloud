// ImageGallery.js
import React, { useState } from "react";
import "./ImageGallery.css";
import ImageDetailsPopup from "./ImageDetailsPopup";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "./AuthProvider";
import { backendBaseUrl } from "../config";

const ImageGallery = ({ images, onDeleteImage }) => {
  const [showImageDetailsPopup, setShowImageDetailsPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { getUser } = useAuth();
  const user = getUser();
  const isAdmin = user && user.role.toUpperCase() === "ADMIN";

  const handleImageCardClick = (
    imageData,
    imageDescription,
    uploadedBy,
    uploadDate
  ) => {
    setSelectedImage({ imageData, imageDescription, uploadedBy, uploadDate });
    setShowImageDetailsPopup(true);
  };

  const handleDeleteImage = async (imageId) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    try {
      const response = await fetch(`${backendBaseUrl}/images/${imageId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete image");
      }
      onDeleteImage();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
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
            {isAdmin && (
              <div
                className="delete-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteImage(image.imageId);
                }}
              >
                <FaTrash />
              </div>
            )}
          </div>
          <div className="image-details">
            <p>Uploaded by: {image.uploadedBy}</p>
            <p>
              Upload Date:{" "}
              {new Date(image.uploadDate).toLocaleDateString()}
            </p>
            <p>Description: {image.description}</p>
          </div>
        </div>
      ))}
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
