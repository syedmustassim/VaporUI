import {BiHomeAlt2} from "react-icons/bi"
import {BsColumnsGap} from "react-icons/bs"
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-card">
                <BiHomeAlt2 size={30} className="card-icon"/>
                <h2>Home</h2>
            </div>
            <div className="sidebar-card">
                <BsColumnsGap size={30} className="card-icon"/>
                <h2>Get Started</h2>
            </div>
        </div>
    )
}

export default Sidebar