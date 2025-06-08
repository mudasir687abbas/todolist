import { useEffect, useState } from 'react';
import Task from './Task';
const Input = function(){
    const [input,setInput] = useState("");
    const [text,setText] = useState(()=>{
        const data = localStorage.getItem('list');
        return data ? JSON.parse(data) : [];
        
    });
    return (
    <>
      <div style={Style.InputContainer}>
       <input type='text' value={input} onChange={(e)=>(setInput(e.target.value))} style={Style.Input} placeholder="Enter Task..."/>
       <button style={Style.Button} onClick={()=>{
                                                  if(input == ""){
                                                    alert("Fill Box");
                                                    return;
                                                  }
                                                  const newArray = [input,...text];
                                                  localStorage.setItem('list', JSON.stringify(newArray));
                                                  setText(newArray);
                                                  console.log('I am from button');
                                                  setInput("")
                                                  }}>Add</button>
       </div>
       { text ? text.map((value,index)=> <Task para={value} key={index}/>) : <h1>No Data</h1>}
    </>);
}

export default Input;

const Style = {
    InputContainer:{
        width:"100%",
        padding:"30px",
        marginBottom:"15px",
        background:"teal",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"0.9px"
    },
    Input:{
        flexBasis:"300px",
        flexGrow:"0.2",
        height:"40px",
        border:"none",
        borderRadius:"10px 0px 0px 10px",
        textIndent:"10px",
        outline:"none"
        

    },
    Button:{
        width:"100px",
        height:"40px",
        border:"none",
        borderRadius:"0px 10px 10px 0px",
        background:'lightgreen',
        color:"whitesmoke",
        fontWeight:"bolder",
        fontSize:"1.2rem",
        textTransform:"uppercase",
    }

}