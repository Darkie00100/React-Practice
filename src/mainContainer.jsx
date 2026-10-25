// import Studentcard from "./studentCards"
// import students from "../student"
import Counter from "./counter"
export default function Maincntaioner(){
    return(
        <>
        
        {/* <h1>STUDENT-DETAILES</h1> //props
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
         </div> */}
        
        <Counter/>
        </>
    )
}