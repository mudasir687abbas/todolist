import React,{useEffect, useRef, useState} from 'react';
import { FiUploadCloud } from "react-icons/fi";
import "./input.css";

const Input = React.memo(({data})=>{
    const {list,setList,getDate,animateUpdate,animateDelete,setAnimateAlert} = data;
    const input = useRef();
    useEffect(()=>{
        console.log("I am Input");
    });
    return (<>

    <div className="inputDiv">
     <div className="inputContent">
        <input type="text" ref={input} placeholder="Enter Task..."/>
        <button onClick={(e)=>{
            e.target.parentNode.disable = false;
            if(input.current.value === ""){
                setAnimateAlert(()=>{return {show:true,msg:"Fill input box"}});
                    setTimeout(()=>{setAnimateAlert(()=>{return {show:false,msg:"Fill input box"}})},[3000]);
                return;
            }
            if(list.find((ele,index)=>ele.task === input.current.value)){
                 setAnimateAlert(()=>{return {show:true,msg:"Task exists"}});
                 setTimeout(()=>{setAnimateAlert(()=>{return {show:false,msg:"task exists"}})},[3000]);
                 return;
            }
             let dataObject = {task:input.current.value,date:getDate()};
             let newList = [dataObject,...list];
             localStorage.setItem('list',JSON.stringify(newList));
             input.current.value = "";
             setList(newList);
             
            
        }} title="Upload"><FiUploadCloud size='35' color="whitesmoke"/></button>
     </div>
     </div>
    </>);


});
export default Input;

