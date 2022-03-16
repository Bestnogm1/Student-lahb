import React from 'react';

function Score(props) {
  return (
    <div>
      <p>{props.scores.date}</p>
      <p>{props.scores.score}</p>
    </div>
  );
}

export default Score;