import './App.css';
import StudentsData from './components/StudentsData'
import Students from './components/Students';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from 'react-bootstrap'
import { useState } from 'react';
function App() {
  const [students, setStudents] =useState(StudentsData)
  return (
    <>
    {students.map((studentInfo, index) =>{
      return(<Students  data={studentInfo} key={index}/>)
    })}
    </>

    // <div>
      
    //   {StudentsData.map(st => {
    //     return (
    //       <Card class="first-card">
    //         <Students name={st.name} bio={st.bio} scores={st.scores}/>
    //       </Card>
    //     )
    //   })}
    // </div>
  );

}
export default App;
