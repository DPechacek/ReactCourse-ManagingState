import React from 'react';
import './App.css';

function GameBoard(props) {
  const {value1, value2, value3, proposedAnswer} = props;
  
  return (
    <div>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={() => props.processAnswer(true)}>True</button>
      <button onClick={() => props.processAnswer(false)}>False</button>
    </div>
  );
}

export default GameBoard;
