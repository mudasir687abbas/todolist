import Task from  "./Task.jsx";
import "./ToDoList.css";
import {useState,useEffect} from 'react';
const ToDoList = ()=>{
  const [list,setlist] = useState(()=>{
    let savedData = localStorage.getItem("todo");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [input,setInput] = useState("");
  const [toggleValueOfAddBtn,setToggleValueOfAddBtn] = useState(false);
  const [updateId,setUpdateId] = useState(null);
 function showList(e){
  
  let objData = {text:input,date:currentDate()};
  
  if(input === ""){
    alert("Input should not empty!!!");
    return;
  }
  
  if(e.target.innerText === "Update"){
   if(input === list[updateId].text){
       alert("NO Any Change In Data?");
       return;
   }
    list[updateId] = {text:input,date:currentDate()+"updated"};
    console.log(list);
    setToggleValueOfAddBtn(false);
    setInput("");
    return;
  }
  if(e.target.innerText === "Add"){
  setlist([...list,objData]);
  return;  
  }
 }
 useEffect(()=>{
  setInput("");
 },[list]);
 useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(list));
 });

 
 
  function currentDate(){
  let date = new Date();
  return date.toDateString();
 }

  return(
 <>
 <div className="ToDoListContainer">
  <p className="titleContainer">   
    <h1>To Do List In ReactJs </h1>
  <p className="subtitle">Using LocalStorage</p>
  </p>
   <div className="InputAddBtn">
   <input type="text" value={input} onInput={(e)=>setInput(e.target.value)} placeholder="Enter To Do..."/>
   <span onClick={showList} >{toggleValueOfAddBtn ? "Update" : "Add"}</span>
    </div>
   <div className="TaskContainer">
    
    {list.length === 0 ? <h1>List is Empty! <span>😯</span></h1> : list.map((txt,index)=>{ return <Task key={txt.index} 
                                          txt={txt.text} 
                                          date={txt.date} 
                                          indexkey={index} 
                                          list={list} 
                                          setList={setlist}
                                           setinput={setInput} 
                                          setToggle={setToggleValueOfAddBtn}
                                          setUpdateID = {setUpdateId}
                                          />})}
        
    
   </div>
 </div>
 

 </>
);
}
export default ToDoList;

