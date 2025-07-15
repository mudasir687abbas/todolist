import { useState,useEffect, useMemo} from 'react';
import './App.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Task from './components/task/Task';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import Alert from './components/alert/Alert';
import { MdSignalCellularNodata } from 'react-icons/md';
import { BsEmojiAngry } from 'react-icons/bs';
import { CgUnavailable } from 'react-icons/cg';
function App() {
  const [list,setList]= useState([]);
  const [animateUpdate,setAnimateUpdate] = useState(false);
  const [animateDelete,setAnimateDelete] = useState(false);
  const [key,setKey] = useState(-1);
  const [animateAlert,setAnimateAlert]= useState({show:false,msg:"Fill Input Box"});
  useEffect(()=>{
    let localData = localStorage.getItem('list') || "[]";
       setList(JSON.parse(localData));
  },[]);
  const memoList = useMemo(()=>{
     return list.length === 0 ? [] : list.map((item,index)=>(<Task data={
                                             {list,setList,item,index,animateUpdate,setAnimateUpdate,setKey,animateDelete,setAnimateDelete}} />));
  },[list]);
  return (<>
        <Header/>
        <Input data = {{list,setList,getDate,animateUpdate,animateDelete,setAnimateAlert}} />
        <div className="floatingDiv">
          <div className='taskList'>
           {memoList.length === 0 ? <div className="noDataDiv"><CgUnavailable color='tomato' size='50'/><h3>No Data</h3></div> : memoList}  
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

