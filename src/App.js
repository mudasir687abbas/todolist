import { useState,useEffect, useMemo} from 'react';
import './App.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Task from './components/task/Task';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import Alert from './components/alert/Alert';
function App() {
  const [list,setList]= useState([]);
  const [animateUpdate,setAnimateUpdate] = useState(false);
  const [animateDelete,setAnimateDelete] = useState(false);
  const [key,setKey] = useState(-1);
  const [animateAlert,setAnimateAlert]= useState(false);
  useEffect(()=>{
    let localData = localStorage.getItem('list') || "[]";
       setList(JSON.parse(localData));
  },[]);
  const memoList = useMemo(()=>{
     return list.length === 0 ? [] : list.map((item,index)=>(<Task data={
                                             {item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete}} />));
  },[list]);
  return (<>
        <Header/>
        <Input data = {{list,setList,getDate,setAnimateAlert}} />
        <div className="floatingDiv">
          <div className='taskList'>
           {list.length === 0 ? <h1>No Data</h1> : memoList}  
          </div>
        <Update data={{list,setList,animateUpdate,setAnimateUpdate,key,getDate}}/>
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

