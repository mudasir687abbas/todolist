import {FaEdit,FaTrash} from 'react-icons/fa';
const Task = function({para}){
    return (<>
      <div style={Style.taskContainer}>
       <div style={Style.btnContainer}>
         <button style={Style.iconContainer} >
            <FaEdit size={16} color="white"/> Edit

         </button>
         <button style={Style.iconContainer}>
            <FaTrash size={16} color="crimson"/> Delete

         </button>
         
       </div>
       <p style={Style.taskText}>
        {para}
       </p>
       </div>
    </>);
}

export default Task;
var icon = true;
const Style = {
    taskContainer:{
        width:"90%",
        padding:"15px 5px",
        backgroundColor:"white",
        margin:"5px auto",
        borderRadius:"20px",
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center", 
    },
    taskText:{
        width:'95%',
        height:"60px",
        padding:"5px",
        borderRadius:"10px",
        

    },
    btnContainer:{
        width:"95%",
        height:"40px",
        border:"none",
        borderRadius:"0px 10px 10px 0px",
        fontWeight:"bolder",
        fontSize:"1.2rem",
        display:"flex",
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:"center",
        gap:"10px"
    },
    iconContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
         gap:'5px',
         border:'none',
         padding:'10px',
         background: 'lightgreen',
         color:'white'
         
    }
}