import { FaCheck, FaCheckCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import "./task.css";
import { GrUpdate } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { backIn } from "motion";

const Task = ({data})=>{
    const {list,setList,item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete} = data;
    const {isFinished,finishedColor,defaultColor} = item.finishedTask;
    const {isUpdated,updatedTask,updatedDate} = item.updatedTask;
    const {task,date} = item.createdTask;
    return (<>
     <div className="taskDiv" style={{background: isFinished ? finishedColor : defaultColor}}>
        <div className="taskActionDiv" >
            <p className="taskData" >{isUpdated ? updatedDate: date}</p>
            <div className="taskBtnDiv">
                <button className="taskEditBtn"
                        title="Check to complete task" 
                        onClick={()=>{
                         const newList = [...list];
                        const obj = newList[index];
                        console.log(obj);
                        const newObj = {...obj,finishedTask:{isFinished:!isFinished,finishedColor:'lightgreen',deaultColor:'teal'}}; 
                        console.log(newObj);
                        newList.splice(index,1,newObj);
                        console.log(newList);
                        localStorage.setItem('list',JSON.stringify(newList));
                        setList(newList);
                }}
                  ><FaCheckCircle  size='17'/></button>
                <button className="taskEditBtn" title="Edit" onClick={()=>{setAnimateUpdate(true);setKey(index)}}
                        style={{display: isFinished ? "none" :'block'}}
                        ><BiEditAlt color='lightgreen' size='15'/></button>
                <button className="taskDeleteBtn" title="Delete" onClick={()=>{setAnimateDelete(true);setKey(index)}}><FaTrash color='tomato' size='15'/></button>
            </div>
        </div>
        <p className="taskPara" >
            {isUpdated ? updatedTask : task}
        </p>
     </div>
    </>);


}
export default Task;