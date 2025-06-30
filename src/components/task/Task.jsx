import { FaPlusCircle, FaTrash } from "react-icons/fa";
import "./task.css";
import { GrUpdate } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { useEffect } from "react";

const Task = ({data})=>{
    const {item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete} = data;
    useEffect(()=>{
       console.log("I am Task");
    },[animateUpdate,animateDelete]);
    return (<>
     <div className="taskDiv">
        <div className="taskActionDiv">
            <p className="taskData">{item.date}</p>
            <div className="taskBtnDiv">
                <button className="taskEditBtn" title="Edit" onClick={()=>{setAnimateUpdate(true);setKey(index)}}><BiEditAlt color='whitesmoke' size='15'/></button>
                <button className="taskDeleteBtn" title="Delete" onClick={()=>{setAnimateDelete(true);setKey(index)}}><FaTrash color='whitesmoke' size='15'/></button>
            </div>
        </div>
        <p className="taskPara">
            {item.task}
        </p>
     </div>
    </>);


}
export default Task;