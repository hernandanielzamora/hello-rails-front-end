import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Message from './components/Message';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
