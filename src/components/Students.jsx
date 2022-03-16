import React from 'react';
import Score from './Score'
import {Card} from 'react-bootstrap'
function Students(props) {
  return (
    <div>
      
        <Card.Body class="first-card"> 
          <h1>{props.name}</h1>
          <h1>{props.bio}</h1>
        {props.scores.map(sc => {
          return <Score scores={sc} />
        })}
        </Card.Body>
     
        
    </div>
        
  );
  
}


export default Students;