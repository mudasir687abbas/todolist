import { PiWarningCircleBold } from "react-icons/pi";
import "./alert.css";
const Alert = ({animateAlert})=>{
    return(<>
    <div className="alertDiv" style={{transform : animateAlert ? 'translate(0%)':'translate(-100%)'}}>
     <div className="alertContent">
        <button><PiWarningCircleBold size="50" color="whitesmoke"/></button>
        <p>Please,Fill input box!!!</p>
     </div>
     </div>
    </>);
}

export default Alert;