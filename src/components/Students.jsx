import React from 'react';
import Score from './Score'
// import {Card} from 'react-bootstrap'
function Students(props) {
  const {name,bio, scores} = props.data
  return (
    <>
    <h1> {name} </h1>
    <p> {bio}</p>
    <p>Score</p>
    {scores.map((Student, index)=>{
      return <Score 
      date={Student.date} 
      score={Student.score} />
    })}
    
    </>
    // <div>
    //     <Card.Body class="first-card"> 
    //       <h1>{props.name}</h1>
    //       <h1>{props.bio}</h1>
    //     {props.scores.map(sc => {
    //       return <Score scores={sc} />
    //     })}
    //     </Card.Body>
        
    // </div>
        
  );
  
}


export default Students;