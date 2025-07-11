import { PiWarningCircleBold } from "react-icons/pi";
import "./alert.css";
const Alert = ({animateAlert})=>{
    const {show,msg} = animateAlert;
    return(<>
    <div className="alertDiv" style={{transform : show ? 'translate(0%)':'translate(-100%)'}}>
     <div className="alertContent">
        <button><PiWarningCircleBold size="50" color="orange"/></button>
        <p>{msg}</p>
     </div>
     </div>
    </>);
}

export default Alert;