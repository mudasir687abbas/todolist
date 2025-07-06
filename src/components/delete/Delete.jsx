import { useEffect } from "react";
import "./delete.css";
import { FaTrash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const Delete = ({data})=>{
    const {list,setList,animateDelete,setAnimateDelete,key} = data;
    return(<>
     <div className="deleteDiv" style={{transform : animateDelete ? 'translate(0%)' : 'translate(-100%)',transition:'transform 1.5s linear'}}>
        <div className="deleteContent">
        <h1>Confirm to delete task</h1>
        <button className='deleteIcon'><FaTrash size="200" color="crimson"/></button>
        <div className="deleteBtnDiv">
            <button className="deleteCancelBtn" onClick={()=>{setAnimateDelete(false);}}><MdCancel size="25" color="tomato"/>Cancel</button>
            <button className="deleteDeleteBtn" onClick={()=>{
                    list.splice(key,1);
                    localStorage.setItem('list',JSON.stringify(list));
                    setList(list);
                    setAnimateDelete(false);
                    
            }}><FaTrash size="25" color="crimson"/>Delete</button>
        </div>
        </div>

     </div>
    </>);
}

export default Delete;