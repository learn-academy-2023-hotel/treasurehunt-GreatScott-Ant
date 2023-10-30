import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const[treasureLocation, setTreasureLocation]= useState(
    Math.floor(Math.random() * board.length)
    )
    const[bombLocation, setBombLocation]= useState(
      Math.floor(Math.random() * board.length)
      )
      
      
      
      const handleSquareClick = (clickedSquareIndex) => {
        //create a variable holding copy of current state
        let updatedBoard = [... board]
        // set condition for if treausre location is same as clicked square's index show a treasure
        if(clickedSquareIndex === treasureLocation) {
          // then reassign state value at that index to treasure emoji
          updatedBoard[clickedSquareIndex] = "💎"
          alert ("You've Found the Treasure!")
          // setBoard(updatedBoard)
        } else if (clickedSquareIndex === bombLocation) {
          updatedBoard[clickedSquareIndex] = "💣"
          alert ("GAME OVER!")
          // setBoard(updatedBoard)
        } else {
          //  use index from clickedSquareIndex to update the current square's value with emoji
          updatedBoard[clickedSquareIndex] = "🌴"
          setAttempts(attempts -1)
          //  update state with the new board
          
        }
        setBoard(updatedBoard)
        
      }
      
      const reset = ()=> {
        // const gameReset = board.map () => "?" {
        // setBoard(resetBoard)
        window.location.reload()

        
      }

      const[attempts, setAttempts] = useState(5)

      // function handleWin(e) {
      //     if(e.target.className== "treasureLocation") {
      //       e.stopPropagation();
      //     }

        // function handleWin(e) {
        //   if(e.target.className=="💣") {
        //     e.stopPropagation();
        //   }
      
      return (
        <>
      <h1>National Treasure III</h1>

      <div className = "board">
      {/* map over array and return a square for each element*/}
      {board.map((value, index) => {
        console.log(value, index)
      return <Square 
      value={value} 
      index={index} 
      handleSquareClick={handleSquareClick}
      />

    })}
    </div>

      <div className = "centerButton">
      <button onClick={reset}>
            Play Again
          </button>

      <div classname="attemptbox">Attempts Remaining: {attempts}
            </div>
      </div>
    </>
  )
}


export default App