import { useEffect,useRef} from "react";
import "./update.css";

const Update= ({data})=>{    
   const {list,setList,animateUpdate,setAnimateUpdate,key} = data;
   const uinput = useRef(null);
   useEffect(()=>{
    uinput.current.value = list[key].task; 
   },[key]);
  return(<>
   
    <div className="alertDiv" style={{transform : animateUpdate ? 'translate(0%)' : 'translate(-100%)',transition:'transform 1.5s linear'
    }} >
     <div className="updateDiv">
        <div className="updateContent">
        <h1 >Update</h1>
        <input type="text" ref={uinput}placeholder='Edit Data' />
        <div className="updateBtnDiv">
            <button className="updateCancelBtn" onClick={()=>{setAnimateUpdate(false)}}>Cancel</button>
            <button className="updateUpdateBtn"onClick={()=>{
                 list[key].task = uinput.current.value;
                 localStorage.setItem('list',JSON.stringify(list));
                 setList(list);
                 setAnimateUpdate(false);
            }}>Update</button>
        </div>
        </div>
       </div> 
     </div>
    </>);
}

export default Update;