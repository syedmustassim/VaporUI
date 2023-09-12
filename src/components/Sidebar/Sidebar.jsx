import {BiHomeAlt2} from "react-icons/bi"
import {BsColumnsGap} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"
import {RxComponent1} from "react-icons/rx"

import { Link } from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Link to="/" className="sidebar-card">
                <BiHomeAlt2 size={30} className="card-icon"/>
                <h2>Home</h2>
            </Link>
            <Link to="/getstarted" className="sidebar-card">
                <BsColumnsGap size={30} className="card-icon"/>
                <h2>Get Started</h2>
            </Link>
            <Link to="/components" className="sidebar-card">
                <RxComponent1 size={30} className="card-icon"/>
                <h2>Components</h2>
            </Link>
            <Link to="https://github.com/syedmustassim/VaporUI" className="sidebar-card">
                <FiGithub size={30} className="card-icon"/>
                <h2>Github</h2>
            </Link>

        </div>
    )
}

export default Sidebar