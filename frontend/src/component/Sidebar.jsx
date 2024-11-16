import React from 'react';
import "../css/sidebar.css"; // Create this CSS file for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Instagram</h2>
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Explore</li>
        <li>Reels</li>
        <li>Messages</li>
        <li>Notifications</li>
        <li>Create</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
    </div>
  );
}

export default Sidebar;