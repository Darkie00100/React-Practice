import React from "react"
export default function Counter(){
    const [count,setCount] = React.useState(0)
    function handelup(){
        setCount(count+1)
    }
    function handeldown(){
        setCount(count-1)
    }
    // function handelReset(){
    //     setCount(0)
    // }
    function reportCount(count){
        if (count>0) {
            return "Positive"
        } else if(count<0) {
            return "Negative"        
        }
        else{
            return "Zero"
        }
    }
    return(
        <>
        <h1>count:{count} </h1>
      <button onClick={handelup}> upcount</button>
      <button onClick={handeldown}> down count</button>
      {/* <button onClick={handelReset}>Reset</button> */}<h4>{reportCount(count)}</h4>
        </>
    )
}