import React, {useState, useCallback} from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Square from './Square'

export const WHITE = "white";
export const BLACK = "black";
export const ItemTypes = {
  STONE: "stone",
  DAME: "dame"
}

export const Board = () => {
  const [figures, setFigures] = useState([
    [{type: ItemTypes.STONE, color: WHITE}, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, {type: ItemTypes.DAME, color: BLACK}, null, null, null, null, null],
    [null, null, null, null, null, null, {type: ItemTypes.STONE, color: BLACK}, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]]);
  
  const moveFigure = (x,y,figure) => {
    console.log(x,y,figure);
    let newFigures = JSON.parse(JSON.stringify(figures));
    
    newFigures[figure.x][figure.y] = null;
    newFigures[x][y] = {type: figure.type, color: figure.color};
    setFigures(newFigures);
  };
  console.log(figures);
  return (
    <DndProvider backend={HTML5Backend}>
      <table className="board">
        <tbody>
        {figures.map((item, row) => (
        <tr key={row}>
          {item.map((item2, column) => (<Square key={column} color={(row+column)%2 === 0 ? "light" : "dark"} row={row} column={column} figure={figures[row][column]} moveFigure={moveFigure} />))}
        </tr>))}
        </tbody>
      </table>
    </DndProvider>
  )
}

export default Board;