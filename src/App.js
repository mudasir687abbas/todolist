import { useState,useEffect, useCallback} from 'react';
import './App.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Task from './components/task/Task';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import Alert from './components/alert/Alert';
function App() {
  const [list,setList]= useState(()=>{
    let localData = JSON.parse(localStorage.getItem('list')) || [];
    return localData;
  });
  const [animateUpdate,setAnimateUpdate] = useState(false);
  const [animateDelete,setAnimateDelete] = useState(false);
  const [key,setKey] = useState(-1);
  const [animateAlert,setAnimateAlert]= useState(false);
  useEffect(()=>{
    console.log("I am App");
  },[list]);
  
  return (<>
        <Header/>
        <Input data = {{list,setList,getDate,setAnimateAlert}} />
        <div className="floatingDiv">
          <div className='taskList'>
           {list.length === 0 ? <h1>No Data</h1> : list.map((item,index)=>(<Task data={{item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete}} />))}  
          </div>
        <Update data={{list,setList,animateUpdate,setAnimateUpdate,key}}/>
        <Delete data={{list,setList,animateDelete,setAnimateDelete,key}}/>
        <Alert animateAlert={animateAlert}/>
        </div>
        
    
        </>);
}

export default App;
function getDate(){
  let date = new Date();
  return date.toDateString();
}

