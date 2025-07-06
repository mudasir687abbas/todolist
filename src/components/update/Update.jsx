import { useEffect,useRef} from "react";
import "./update.css";
import { MdCancel, MdUpdatedEnabled } from "react-icons/md";
import { PiUploadDuotone } from "react-icons/pi";
import { FcCancel } from "react-icons/fc";
import { FaUserEdit } from "react-icons/fa";

const Update= ({data})=>{    
   const {list,setList,animateUpdate,setAnimateUpdate,key} = data;
   const uinput = useRef();
   useEffect(()=>{
     uinput.current.value = list.length === 0 ? null : list[key].task;
    
   },[key]);
  return(<>
   
    <div className="alertDiv" style={{transform : animateUpdate ? 'translate(0%)' : 'translate(-100%)',transition:'transform 1.5s linear'
    }} >
     <div className="updateDiv">
        <div className="updateContent">
        <h1 >Update</h1>
        <input type="text" ref={uinput}placeholder='Edit Data' />
        <div className="updateBtnDiv">
            <button className="updateCancelBtn" onClick={()=>{setAnimateUpdate(false)}}><MdCancel size="25" color="tomato"/>Cancel</button>
            <button className="updateUpdateBtn"onClick={()=>{
                 list[key].task = uinput.current.value;
                 localStorage.setItem('list',JSON.stringify(list));
                 setList(list);
                 setAnimateUpdate(false);
            }}><FaUserEdit size="25" color="lightgreen"/>Update</button>
        </div>
        </div>
       </div> 
     </div>
    </>);
}

export default Update;