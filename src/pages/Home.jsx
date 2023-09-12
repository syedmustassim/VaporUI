import {Link} from "react-router-dom"
import "./Home.css"
const Home = () => {
    return(
        <div className="home-container">
            <div className="home-main">
                <img src="https://i.postimg.cc/qRhb58yj/vapor-one.jpg" alt="vapor" className="vapor-img"/>
                <h1 className="home-heading">Vapor UI</h1>
                <p className="home-content">Vapor-1 aims to simplify your design and development workflow, so you can create stunning, user-friendly experiences.</p>
                <Link to="/getstarted"><button className="home-btn">Get Started</button></Link>
            </div>
            <div className="home-secondary">
                <img src="https://i.postimg.cc/L6LySvYf/sail.jpg" alt="vapor-five" className="vapor-secondary"/>
                <h1>A UI Design System</h1>
                <h2>developed by &copy; Syed Mustassim</h2>
            </div>
        </div>
    )
}

export default Home;