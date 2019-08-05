import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button3';
import Box from './Box1';

function App() {
  return (
    <div className="App">
      <Button size="big"/>      
      <Button size="small"/>      
      <Box size="big"/>      
      <Box size="small"/>      
    </div>
  );
}

export default App;
