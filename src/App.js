import React from 'react';
import Board from './Chessboard/Board';
import './App.css';

function App() {
  return (
    <Board knightPosition={[7, 4]} />
  );
}

export default App;
