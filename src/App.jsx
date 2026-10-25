import Studentcard from "./studentCards"
import './App.css'
function App(){
    return(
     <>
         <h1>STUDENT-DETAILES</h1>
         <div className="card">
            <Studentcard
            studentName ="Preetham"
            branch = "CSE"
            sem = "Fifth"
            cgpa = {8.82}
             />
            <Studentcard
            studentName ="Reeth"
            branch = "ME"
            sem = "Fifth"
            cgpa = {6.62}
            />

         </div>
        </>
    )
}

export default App