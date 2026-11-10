import {useState} from "react"
//import students from "./student"
export default function Register(){
    const [student,settStudent] = useState([])
    const[formdata,setformdat] = useState({
        name :"",
        email:"",
        password:"",
        branch:"",
        sem:"",
        cgpa:""
    }
    )
    function handelchange(event){
        const {name,value} = event.target
        setformdat(prev=>({
            ...prev,[name]:value
        }))
    }
    function handelSubmit(e){
        e.preventDefault()
        settStudent(prev=>(
            [...prev,formdata]
        ))

        setformdat({
         name :"",
        email:"",
        password:"",
        branch:"",
        sem:"",
        cgpa:""}
        )
    }
    return (
        <>
        {<form onSubmit={handelSubmit}
        className="form-det">
          <input
            type="text"
            value={formdata.name}
            name="name"
            onChange={handelchange}
            placeholder="Enter name"
            />
            <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handelchange}
            placeholder="Enter email"
            />
                        <input
            type="password"
            value={formdata.password}
            name="password"
            onChange={handelchange}
            placeholder="Enter pasword"
            />
                        <input
            type="text"
            name="branch"
            value={formdata.branch}
            onChange={handelchange}
            placeholder="Enter branch"
            />
                        <input
            type="text"
            value={formdata.sem}
            name="sem"
            onChange={handelchange}
            placeholder="Enter sem"
            />
                        <input
            type="text"
            value={formdata.cgpa}
            name="cgpa"
            onChange={handelchange}
            placeholder="Enter cgpa"
            />
            <button type="submit">
                Regester
            </button>
        </form>}
        <div className="displ">
            {student.map((std,index)=>(
                <div key={index}>
                    <h2><u>Student{index+1}</u></h2>
                <h3>{std.name}</h3>
            <h3>{std.branch}</h3>
            <h3>{std.email}</h3>
        <h3>{std.password}</h3>
            <h3>{std.sem}</h3>
            <h3>{std.cgpa}</h3>
            </div>

            ))}
            
            </div>
         </> 
    )
}



    // const [name,setName] = React.useState("")
    // const[email,setEmail] = React.useState("")
    // const [branch,setBranch] = React.useState("")
    // function handelSubmit(event){
    //     event.preventDefault()
    //     setName("")
    //     setBranch("")
    //     setEmail("")
    // }
   
    // function handelname(event){
    //     setName(event.target.value)
    // }
    //     function handelemail(event){
    //     setEmail(event.target.value)
    // }
    //     function handelbranch(event){
    //     setBranch(event.target.value)
    // }
/* <form onSubmit={handelSubmit}>
            <input
            type="text"
            value={name}
            onChange={handelname}
            placeholder="Enter name"
            />
            <input
            type="text"
            value={email}
            onChange={handelemail}
            placeholder="Enter email"
            />
            <select>
                <option value="cse">CSE</option>
                <option value="csds">CSDS</option>
                <option value="ai">AI</option>
                <option value="csbs">CSBS</option>
                onChange={handelbranch}
            </select>
            <button type="submit">
                Regester
            </button>
        </form>
             <div className="display">
            <h3>{name}</h3>
         <h3>{email}</h3>
          <h3>{branch}</h3>
        </div>
       */