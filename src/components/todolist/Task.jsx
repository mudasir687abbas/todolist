import "./Task.css";
  const Task = function({txt,date,indexkey,list,setList,setinput,setToggle,setUpdateID}){
   let deleteItem = ()=>{
    alert("Do you want to delete data???");
    let finalList = list.filter((v,i)=> i !== indexkey );
     setList(finalList);
     console.log(finalList);
  } 
  let updateItem = ()=>{
     setToggle(true);
     setinput(list[indexkey].text);
     setUpdateID(indexkey);
  }
  return (
    <>

     <div className="Task" >
       <div className="BtnContainer">
       <p className="TaskDate">{date}</p>
         <button onClick={()=>{updateItem()}} id="updateBtn">U</button>
         <button onClick={()=>{deleteItem()}} id="deleteBtn">X</button>
       </div>
       <p className="TaskText">{txt}</p>
       
     </div>
    </>
    );
}
export default Task;
