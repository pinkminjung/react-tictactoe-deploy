import React, { useState } from 'react'
import Square from './Square'
import './Board.css'

// export default class Board extends Component { // 클래스형 컴포넌트
const Board = ({squares, onClick}) => { // 함수형 컴포넌트

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null) // [ 'X','O', null,'X','O', null,'X','O', null]
  //   } 
  // }

  const renderSquare = (i) => {
    return <Square value={squares[i]}
      onClick={() => { onClick(i) }} />
  }

  // render() { // 클래스형 컴포넌트에서 컴포넌트를 렌더링하는(화면에 나타내는) 메소드
  return (
    <div className="board-wrapper">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
export default Board;