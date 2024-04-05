import { useState } from "react";

export default function Counter(){
  let[count,setCount]= useState(0);
  let inccount=()=>{
    setCount(count+= 1);

  };
    return(
        <div>
         <button onClick={inccount}>count:{count}</button>
        </div>
    );
}