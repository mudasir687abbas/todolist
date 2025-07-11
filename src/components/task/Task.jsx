import { FaCheck, FaCheckCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import "./task.css";
import { GrUpdate } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { backIn } from "motion";

const Task = ({data})=>{
    const {item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete} = data;
    const [taskFinished,setTaskFinished] = useState(false);
    useEffect(()=>{
       console.log("I am Task");
    },[animateUpdate,animateDelete]);
    return (<>
     <div className="taskDiv" style={{background: taskFinished ? "lightgreen" : "teal"}}>
        <div className="taskActionDiv">
            <p className="taskData" style={{color: taskFinished ? "green" : "white"}}>{item.date}</p>
            <div className="taskBtnDiv">
                <button className="taskEditBtn" title="Check to complete task"  onClick={()=>{setTaskFinished(!taskFinished)}}><FaCheckCircle color={taskFinished ? 'green' : 'lightgreen'} size='17'/></button>
                <button className="taskEditBtn" title="Edit" onClick={()=>{setAnimateUpdate(true);setKey(index)}} style={{display: taskFinished ? "none" : "block"}}><BiEditAlt color='lightgreen' size='15'/></button>
                <button className="taskDeleteBtn" title="Delete" onClick={()=>{setAnimateDelete(true);setKey(index)}}><FaTrash color='tomato' size='15'/></button>
            </div>
        </div>
        <p className="taskPara" style={{color: taskFinished ? "green" : "white"}}>
            {taskFinished ? "completed" : item.task}
        </p>
     </div>
    </>);


}
export default Task;