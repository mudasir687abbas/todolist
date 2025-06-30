import { RiTodoLine } from "react-icons/ri";
import "./header.css";

const Header =  ()=>{
    return(<>
    <header>
      <button><RiTodoLine size="60" color="whitesmoke"/></button>
      <div > 
        <h1>ToDoList</h1>
        <h5 > ReactJS|LocalStorage</h5>
     </div>
      
    </header>
    </>);
}

export default Header;