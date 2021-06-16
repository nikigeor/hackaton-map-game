import React, { useState } from "react";
import "./Game1.css"
import Game1Box from "./Game1Box"
import { Link } from "react-router-dom"

const board = [[], [], []]

const GameOne = ({index}) => {
  const [turn, setTurn] = useState('X')
  const [winningText, setWinningText] = useState('')

  function changeTurn(row, col) {

    board[row][col] = turn

    setTurn(turn => turn === "X"? "O" : "X")
    // console.log(board);

    const winner = checkForWin()

    if(!winner) {
      // 
    } else {
      setWinningText(winner + ' wins!!!')
    }
  }

  function checkForWin() {
    // row test
    for(let i=0; i<board.length; i++) {
      const row = board[i]
      if(row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0]
      }
    }

    //  column test
    for(let i=0; i<board.length; i++) {
      const el1 = board[0][i]
      const el2 = board[1][i]
      const el3 = board[2][i]

      if(el1 === el2 && el2 === el3 && el1) {
        return el1
      }
    }
    // diagonal test
    const d1 = board[0][0]
    const d2 = board[1][1]
    const d3 = board[2][2]

    if(d1 === d2 && d2 === d3 && d1) {
      return d1
    }

    const p1 = board[0][2]
    const p2 = board[1][1]
    const p3 = board[2][0]

    if(p1 === p2 && p2 === p3 && p1) {
      return p1
    }
    return false
  }

  return (
    <div id="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="row">
        <Game1Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Game1Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Game1Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Game1Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="winning-text">
        {winningText}
      </div>
      <div className="buttons">
        <Link style={{marginTop: "100px"}} className="linky-button" to={`/map`}>Back to the map</Link>
      </div>
    </div>

  )
}
 
export default GameOne;