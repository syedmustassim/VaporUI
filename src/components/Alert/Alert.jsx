import {TiTickOutline} from "react-icons/ti"
import {BiErrorAlt} from "react-icons/bi"
import {IoWarningOutline} from "react-icons/io5"
import {BsInfoCircle} from "react-icons/bs"
import "./Alert.css"
const Alert = ({severity, children}) => {
    const getAlertType = (severity) => {
        switch(severity.toLowerCase()){
            case "success":
                return {
                    icon: <TiTickOutline/>,
                    class: "success"
                }
            case "error":
                return {
                    icon: <BiErrorAlt/>,
                    class: "error"
                }
            case "warning": 
                return{
                    icon: <IoWarningOutline/>,
                    class: "warning"
                }
            case "info":
                return{
                    icon: <BsInfoCircle/>,
                    class: "info"
                }
            default: 
                return null;
        }
    }
    const alertData = getAlertType(severity)
    return(
        <div className={alertData?.class}>
           <h2>{alertData?.icon} {children}</h2>
        </div>
    )
}

export default Alert;