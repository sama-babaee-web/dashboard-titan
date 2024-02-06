import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
