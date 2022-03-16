import React from 'react';

function Score({score, date}) {
  return (
    <div>
      <p> {`Date: ${date}`}</p>
      <p> {`Scores: ${score}`}</p>
    </div>
  );
}

export default Score;