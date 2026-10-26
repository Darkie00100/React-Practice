// import Studentcard from "./studentCards"
// import students from "../student"
//import Counter from "./counter"
//import Studentdashboard from "./StudentDashboard"
import Studentdet from "./studentdetails"

export default function Maincntaioner(){
    return(
        <>
        <Studentdet/>
        {/* <div className="student-dashboard">
            <h2>Student Dashboard</h2>
            <Studentdashboard/>
        </div> */}
        
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
        
        {/* <Counter/> */}

        </>
    )
}