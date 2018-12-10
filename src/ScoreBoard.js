import React from 'react';
import './App.css';

function ScoreBoard(props) {
  const {numCorrect, numQuestions} = props;
  
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions}
    </p>
  );
}

export default ScoreBoard;