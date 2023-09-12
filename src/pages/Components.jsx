import { Link } from "react-router-dom";
import "./Components.css"
import Card from "../components/Card/Card";
const Components = () => {
    return(
        <div className="components-main">
            <h1 className="components-heading">Components</h1>
            <p className="components-content">Components are interactive building blocks for creating a user interface. They encapsulate specific functionality and design elements, allowing developers to modularize their code and promote reusability. These self-contained units are essential in simplifying complex UI structures and maintaining consistency throughout the application.</p>
            <div className="components-secondary">
                <Link to="/components/alerts" className="components-link"><Card type="outlined"><h1>Alerts</h1><h3>Click here to view alerts</h3></Card></Link>
                <Link to="/components/avatar" className="components-link"><Card type="outlined"><h1>Avatars</h1><h3>Click here to view avatars</h3></Card></Link>
                <Link to="/components/badge" className="components-link"><Card type="outlined"><h1>Badges</h1><h3>Click here to view badges</h3></Card></Link>
                <Link to="/components/button" className="components-link"><Card type="outlined"><h1>Buttons</h1><h3>Click here to view buttons</h3></Card></Link>
                <Link to="/components/cards" className="components-link"><Card type="outlined"><h1>Cards</h1><h3>Click here to view cards</h3></Card></Link>
                <Link to="/components/heading" className="components-link"><Card type="outlined"><h1>Heading</h1><h3>Click here to view headings</h3></Card></Link>
                <Link to="/components/text" className="components-link"><Card type="outlined"><h1>Text</h1><h3>Click here to view text</h3></Card></Link>
            </div>
        </div>
    )
}

export default Components;