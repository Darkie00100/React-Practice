export default function Studentcard(props){
    return(
        <div className="student-container">
            <div className="cards">
                <h3>Student-Name: {props.studentName} </h3>
           
            <h3>Branch: {props.branch} </h3>
            
            <h3>Semester: {props.sem} </h3>
            
            <h3>CGPA: {props.cgpa} </h3>
            </div>
        </div>

        
    )
}