import React, { useState, useEffect } from "react";
import AlbumTree from "./AlbumTree";
import { useAuth } from "./AuthProvider";
import { backendBaseUrl } from "../config";

const DirectoryContainer = ({ onSelectAlbum, onImageAdded }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [directories, setDirectories] = useState([]);

  const { getUser } = useAuth();

  useEffect(() => {
    const fetchDirectories = async () => {
      try {
        const user = getUser();

        if (!user) {
          throw new Error("User not logged in");
        }

        const response = await fetch(`${backendBaseUrl}/directories`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch directories");
        }

        const data = await response.json();
        setDirectories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching directories:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDirectories();
  }, [getUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSelectAlbum = (album) => {
    onSelectAlbum(album, album.directoryDescription);
  };

  return (
    <AlbumTree
      albums={directories}
      onSelectAlbum={handleSelectAlbum}
      onImageAdded={onImageAdded}
    />
  );
};

export default DirectoryContainer;
