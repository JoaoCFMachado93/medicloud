// AlbumTree.js
import React, { useState } from 'react';
import './AlbumTree.css';

const AlbumTree = ({ albums, onSelectAlbum }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    onSelectAlbum(album); // Callback to parent component to display images for the selected album
  };

  const renderAlbums = (albums) => {
    return albums.map(album => (
      <li key={album.id}>
        <div className={`album ${selectedAlbum === album ? 'selected' : ''}`} onClick={() => handleAlbumClick(album)}>
          {album.name}
        </div>
        {album.subAlbums && album.subAlbums.length > 0 && (
          <ul className="sub-albums">
            {renderAlbums(album.subAlbums)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="album-tree">
      <ul>
        {renderAlbums(albums)}
      </ul>
    </div>
  );
};

export default AlbumTree;
