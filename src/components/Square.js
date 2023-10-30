import React from "react"

const Square = ({ value, index, handleSquareClick }) => {
  // destructuring props  
  //  const { value } = props is same as props.value
  // instead pass the destructured prop in parameters

  const handleClick = () => {
    handleSquareClick(index)
  }

    return (
      <>
        <div className="square" onClick={handleClick}>
          {value}
        </div>
      
      </>
    )
  }
  export default Square
