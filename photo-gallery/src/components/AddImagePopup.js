import React, { useState } from 'react';
import './AddImagePopup.css'; // Import the CSS file

const AddImagePopup = ({ directoryId, onClose, history }) => {
  const [imageData, setImageData] = useState('');
  const [imageName, setImageName] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Ensure all required fields are filled
    if (!imageName || !imageData) {
      alert('Please provide both image name and image data.');
      return;
    }
  
    try {
      // Extract base64 string from data URL
      const base64String = imageData.split(',')[1]; // Split at comma and get the second part
  
      const formData = {
        imageName,
        directory: directoryId, // Include directoryId
        uploadedBy: 'machado', // Change as needed
        uploadDate: Date.now(),
        description: imageDescription,
        imageData: base64String, // Use the extracted base64 string
      };
  
      const response = await fetch(`http://localhost:8080/images/directory/${directoryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]), // Send formData as an array
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Optionally, handle success
        onClose(); // Close the popup
        history.push('/'); // Redirect to homepage using history prop
      } else {
        // Handle error
        console.error('Failed to add image:', response.status);
      }
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Add Image</h2>
        <form onSubmit={handleSubmit}> {/* Use onSubmit event to handle form submission */}
          <input type="file" onChange={handleImageUpload} />
          <input
            type="text"
            placeholder="Image Name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
          />
          <textarea
            placeholder="Image Description"
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
          ></textarea>
          <div className="button-group">
            <button type="submit">Add Image</button> {/* Use type="submit" for the submit button */}
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImagePopup;
