import React from 'react';

// import LoadScreen from './components/loadScreen';
import Navbar from './components/navbar';
import Constuction from './components/constuction';

import './style.css';

export default function App() {
  return (
    <>
      <LoadScreen />
      <div className='container'>
        <Navbar />
        <Constuction />
      </div>
    </>
  );
}