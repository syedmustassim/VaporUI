import {GrMailOption} from "react-icons/gr"
import {BsChatLeft} from "react-icons/bs"
import {BsCameraVideo} from "react-icons/bs"
import "./Badge.css"

const Badge = ({icon, count, label}) => {

    const selectIcon = (icon) => {
        switch(icon.toLowerCase()){
            case "message":
                return {icon: <GrMailOption size={29}/>}
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

export const AvatarBadge = ({children,type}) => {
    return(
        <div className="avatar-badge">
            <span className={type}></span>
            {children}
        </div>
    )
}