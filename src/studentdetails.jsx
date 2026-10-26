import students from "../student.js"
import Studentcard from "./studentCards.jsx"
export default function Studentdet(){
    
    return(
        <>
        <div className="abcd">
            {students.map((std)=>(
            <div className="student"
            key={std.id}
            >
                <Studentcard
                id={std.id}
                name = {std.name}
                branch = {std.branch}
                semester = {std.semester}
                cgpa = {std.cgpa}
                
                />
                
            </div>
       ))}
        </div>
       
       </>
       
    )
}