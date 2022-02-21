import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from './Chessboard/Board';
import List from './Reorder/List';
import Container from './Fruits/Container';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <h1>Dáma</h1>
    <Board />
    <h1>Seznam</h1>
    <List />
    <h1>Ovoce</h1>
    <Container />
    </DndProvider>
  );
}

export default App;
