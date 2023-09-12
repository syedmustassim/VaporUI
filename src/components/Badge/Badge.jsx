import {BsMailbox} from "react-icons/bs"
import {BsChatLeft} from "react-icons/bs"
import {BsCameraVideo} from "react-icons/bs"
import "./Badge.css"

const Badge = ({icon, count, label}) => {

    const selectIcon = (icon) => {
        switch(icon.toLowerCase()){
            case "message":
                return {icon: <BsMailbox size={28}/>}
            case "chat":
                return {icon: <BsChatLeft size={30}/>}
            case "meeting":
                return {icon: <BsCameraVideo size={28}/>}
            default:
                return null;
        }
    }
    const getIcon = selectIcon(icon)
    return(
        <div className="badge">
            <span>{count}</span>
            <icon>{getIcon?.icon}</icon>
            <label>{label}</label>
        </div>
    )
}

export default Badge;