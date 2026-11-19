import React from "react"
import initialStds from "./student"
import Studentcard from "./studentCards"
export default function Pagenate(){
    const[stud,setStud] = React.useState(initialStds)
    function reset() {
    setStud(initialStds);
    setCurrentpage(1);
    }
    const sortedStd = [...stud].sort((a,b)=>b.followers-a.followers)
    
    const [currentPage,setCurrentpage] = React.useState(1)
    const itemsPerPage = 5
    const startIndex = (currentPage-1)* itemsPerPage
    const endIndex  = startIndex+ itemsPerPage
    const totalPage = Math.ceil(sortedStd.length/itemsPerPage)
    const currentStudents = sortedStd.slice(startIndex,endIndex)
    
    return(
        <div className="pagenation">
        <h3><u>Student Details</u></h3>
        <div className="page">
            {currentStudents.map(std=>(
            <div className="stdpagenate"
            key={std.id}>
                <Studentcard
                id={std.id}
                name = {std.name}
                branch = {std.branch}
                semester = {std.semester}
                cgpa = {std.cgpa}
                followers = {std.followers}
                />
            </div>
        ))}
        </div>
        
        <div className="btn">
            <button
            disabled={currentPage===1}
            onClick={()=>setCurrentpage(currentPage-1)}
        > Previous</button>
                <button
            disabled={currentPage===totalPage}
            onClick={()=>setCurrentpage(currentPage+1)}
        > Next</button>
        <button onClick={reset}>Reset</button>
        </div>
        </div>
    )
}