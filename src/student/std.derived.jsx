import React from "react";
import initialStudent from "./student"

export default function Derived(){
    const [student,setStudent] = React.useState(initialStudent)
    const totalStd = student.length
    // const totalFollers = student.reduce(
    //     (total,std)=>total+std.followers,0
    // )
    const totalFollowers = student.reduce(
    (total, std) => total + std.followers,
    0
  );
    const AvgFollower = totalFollowers/ totalStd
    const sortedStd = [...student].sort((a,b)=>b.followers-a.followers)
    const Highest = sortedStd[0]
    const Lowest = sortedStd[totalStd-1]
    return(
    <>
    <h3>Total Students:{totalStd}</h3>
      <h3>Total Followers: {totalFollowers}</h3>
        <h3>avg followers:{AvgFollower}</h3>
    {/* <h3>Highest Follower:{sortedStd}</h3>   */}
    <h3>Student with Highest Followers__----__Name:{Highest.name}; Followers:{Highest.followers}</h3>
    <h3>Student with Lowest Followers__----__Name:{Lowest.name}; Followers:{Lowest.followers}</h3>
    </>   
    )
}