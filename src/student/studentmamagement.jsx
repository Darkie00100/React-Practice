import { useState } from "react"
import Studentcard from "./studentCards"
export default function Management(){
    const [std,setStd] = useState([
  { id: 1, name: "Aarav", branch: "CSE", semester: "Fifth", cgpa: 9.0, followers: 0 },
  { id: 2, name: "Vivaan", branch: "ISE", semester: "Fourth", cgpa: 9.12, followers: 0 },
  { id: 3, name: "Aditya", branch: "ECE", semester: "Third", cgpa: 7.95, followers: 0 },
    ])
    function add(){
        const newstd = {
id: Date.now(),
 name: "Aarnav", branch: "CSE", semester: "Fifth", cgpa: 9.0, followers: 0
        }
        setStd(prev=>(
            [...prev,newstd
            ]
        ))
    }
    function remove(id){
        setStd(std.filter(Stud=>Stud.id!=id))
    }
    function follow(id){
        setStd(std.map(std=>
            std.id==id?{...std,followers:std.followers+1}:std
        ))
    }
    return(
        <div className="management">
            <h2><u>Student-Management</u></h2>
                        {std.map((std)=>(
                        <div className="std"
                        key={std.id}
                        >
                            <Studentcard
                            id={std.id}
                            name = {std.name}
                            branch = {std.branch}
                            semester = {std.semester}
                            cgpa = {std.cgpa}
                            followers = {std.followers}
                            />
                         <button onClick={()=>follow(std.id)}>follow</button>
                         <button onClick={()=>remove(std.id)}>remove student</button>
                        </div>
                   ))}
            <button onClick={add}>add student</button>
            
        </div>
    )
}