import Studentcard from "./studentCards"
import './App.css'
import students from "../student"
function App(){
    return(
     <>
         <h1>STUDENT-DETAILES</h1>
         <div className="card">
        {students.map((student)=>{
          return   <Studentcard
          key = {student.id}
            studentName = {student.name}
            branch = {student.branch}
            sem = {student.semester}
            cgpa = {student.cgpa}
            />
        })}
         </div>
        </>
    )
}

export default App