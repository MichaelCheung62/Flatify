import React from 'react';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="nav">
      <h2>Flatify</h2>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Playlist</Link>
        </li>
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
