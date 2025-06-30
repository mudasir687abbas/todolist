import { FaPlusCircle } from "react-icons/fa";
import React,{useEffect, useRef, useState} from 'react';
import "./input.css";

const Input = React.memo(({data})=>{
    const {list,setList,getDate,setAnimateAlert} = data;
    const input = useRef();
    useEffect(()=>{
        console.log("I am Input");
    });
    return (<>

    <div className="inputDiv">
     <div className="inputContent">
        <input type="text" ref={input} placeholder="Enter Task..."/>
        <button onClick={()=>{
            if(input.current.value === ""){
                setAnimateAlert(true);
                setTimeout(()=>{setAnimateAlert(false)},[3000]);
                return;
            }
             let dataObject = {task:input.current.value,date:getDate()};
             let newList = [dataObject,...list];
             localStorage.setItem('list',JSON.stringify(newList));
             input.current.value = "";
             setList(newList);
            
        }}><FaPlusCircle size='35' color="whitesmoke"/></button>
     </div>
     </div>
    </>);


});
export default Input;

