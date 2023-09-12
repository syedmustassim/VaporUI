import {GrMailOption} from "react-icons/gr"
import {SlLogout} from "react-icons/sl"
import {BsPencilSquare} from "react-icons/bs"
import {IoMdAdd} from "react-icons/io"
import { Link } from "react-router-dom"
import "./Button.css"

const getIcon = (icon,size) => {
    switch(icon.toLowerCase()){
        case "mail": 
            return {icon: <GrMailOption size={size? size : ""}/>}
        case "logout":
            return {icon: <SlLogout size={size? size : ""}/>}
        case "draft": 
            return {icon: <BsPencilSquare size={size? size : ""}/>}
        case "add":
            return {icon: <IoMdAdd size={size? size : ""}/>}
        default: 
            return null;
    }

}

export const Button = ({type,children}) => {
    return(
        <button className={type}>{children}</button>
    )
}

export const LinkButton = ({type,children,destination}) => {
    return(
        <Link to={destination} className={type}>{children}</Link>
    )
}

export const IconButton = ({type, icon, children}) => {
    const icons = getIcon(icon)
    return(
        <span className="icon-btn">
            <Button type={type}> {icons?.icon}{children}</Button>
        </span>
    )
}

export const Fab = ({icon, size}) => {
    const icons = getIcon(icon,size)
    return(

            <button className="fab-btn">{icons.icon}</button>

    )
}