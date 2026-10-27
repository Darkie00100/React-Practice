import React from "react"
import initialstudents from "../student.js"
import Studentcard from "./studentCards.jsx"
export default function Studentdet(){
    const [student,setsStudent] = React.useState(initialstudents)
    function handelFollow(id){
        setsStudent(prevStudent=>
            prevStudent.map(student=>
                student.id === id?{...student,followers:student.followers+1}:student
            )
        ) 
    }
    function handelUnFollow(id){
        setsStudent(prevStudent=>
            prevStudent.map(student=>
                student.id === id?{...student,followers:Math.max(0,student.followers-1)}:student
            )
        ) 
    }
    
    return(
        <>
        <div className="abcd">
            {student.map((std)=>(
            <div className="student"
            key={std.id}
            >
                <Studentcard
                id={std.id}
                name = {std.name}
                branch = {std.branch}
                semester = {std.semester}
                cgpa = {std.cgpa}
                followers = {std.followers}
                onFollow = {handelFollow}
                onUnFollow = {handelUnFollow}
                />
                
            </div>
       ))}
        </div>
       
       </>
       
    )
}