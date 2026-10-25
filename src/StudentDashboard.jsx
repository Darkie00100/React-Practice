import React from "react"
export default function Studentdashboard(){
    const attendence = 75
    const Marks = 95
    const hasScholership  = true
    const [showMarks,setShowMarks] = React.useState(false)
    function handelbutton(){
        setShowMarks(!showMarks)
    }
    return(
        <>
        <h4>{attendence>=75?"Eligible for Exams":"Not-Eligible for exams"} </h4>
        {hasScholership&& <h4> Congratulation you have recived Scholership</h4>}
        <button onClick={handelbutton}>{showMarks?"HideMarks":"ShowMarks"} </button>
        {showMarks&& <h3> your Marks are {Marks}/100</h3>}
        </>

    )
}