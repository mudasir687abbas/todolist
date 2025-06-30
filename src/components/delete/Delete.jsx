import { useEffect } from "react";
import "./delete.css";
import { FaTrash } from "react-icons/fa";
const Delete = ({data})=>{
    const {list,setList,animateDelete,setAnimateDelete,key} = data;
    return(<>
     <div className="deleteDiv" style={{transform : animateDelete ? 'translate(0%)' : 'translate(-100%)',transition:'transform 1.5s linear'}}>
        <div className="deleteContent">
        <h1>Confirm to delete task</h1>
        <button className='deleteIcon'><FaTrash size="200" color="tomato"/></button>
        <div className="deleteBtnDiv">
            <button className="deleteCancelBtn" onClick={()=>{setAnimateDelete(false);}}>Cancel</button>
            <button className="deleteDeleteBtn" onClick={()=>{
                    list.splice(key,1);
                    localStorage.setItem('list',JSON.stringify(list));
                    setList(list);
                    setAnimateDelete(false);
                    
            }}>Delete</button>
        </div>
        </div>

     </div>
    </>);
}

export default Delete;