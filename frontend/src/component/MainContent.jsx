import React from 'react';
import '../css/mainContent.css'; // Create this CSS file for styling

function MainContent() {
  return (
    <div className="main-content">
      <div className="stories">
        {/* Map through user stories and display them here */}
        <div className="story">Story 1</div>
        <div className="story">Story 2</div>
        <div className="story">Story 3</div>
      </div>
      <div className="posts">
        {/* Map through user posts and display them here */}
        <div className="post">
          <img src="https://via.placeholder.com/150" alt="Post" />
          <p>anmol_phutela1282 and kaushal.upveja.77</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;