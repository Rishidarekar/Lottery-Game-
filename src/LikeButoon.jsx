import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setisLiked]= useState(false);
    let click=()=>{
        setisLiked(!isLiked);
    };

    let LikeStyle={
        color:"red",
    };
    return (<div>
        <p onClick={click}>{isLiked ? <i class="fa-solid fa-heart" style={LikeStyle}></i> : <i className="fa-regular fa-heart"></i>}</p>
       
    </div>);
}