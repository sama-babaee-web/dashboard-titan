import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './layouts/Content/Content';
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
