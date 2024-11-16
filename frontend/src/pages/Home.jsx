import React from 'react';
import Sidebar from '../component/Sidebar';
import MainContent from '../component/MainContent';
import RightSidebar from '../component/RightSlidebar';
import '../css/home.css'; // Create this CSS file for global styling

function Home() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

export default Home;