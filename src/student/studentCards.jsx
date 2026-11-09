
export default function Studentcard(std){
   function grade(){
        
            return "Excellent Grade in Academics"  
    }

    return(
        <div className="student-container">
            <div className="cards">
                <h2><u>Student:{std.id}</u></h2>
                <p>Name:{std.name}</p>
                <p>Branch{std.branch}</p>
                <p>Sem:{std.semester}</p>
                <p>cgpa:{std.cgpa}</p>
                {std.cgpa>=9.0?grade():""}
                <p>Followers: {std.followers}</p>
               {std.followers>=0&&<button onClick={()=>std.onFollow(std.id)}>Follow</button>}
                {std.followers>0&&<button onClick={()=>std.onUnFollow(std.id)}>UnFollow</button>}
            </div>
                            
        </div>

        
    )
}