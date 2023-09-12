import {Link} from "react-router-dom"
import {RxComponent1} from "react-icons/rx"
import "./GetStarted.css"
const GetStarted = () => {
    return(
        <div className="start-container">
            <img src="https://i.postimg.cc/4N77d5RJ/vapor-two.jpg" alt="vapor-two" className="start-img" />
            <div className="start-heading">
                <h1>Get Started</h1>
                <h2>Get to know Vapor UI, it's various components and how you can use them to cater to excellent user experiences.</h2>
            </div>
            <div className="start-content">
                <div className="start-content-text">
                <h1> What is Vapor UI?</h1>
                <p>Vapor UI, meticulously crafted by Syed Mustassim, is a CSS component library designed to empower both developers and designers in their quest to craft exceptional user experiences for the web. With Vapor UI, you can effortlessly enhance your web projects, ensuring they not only meet but exceed user expectations. Embrace Vapor UI and elevate your web design and development endeavors to new heights, delivering seamless and visually stunning interfaces that captivate and engage users.</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/50HtK43w/usgs-ho-S3dzgp-Hzw-unsplash.jpg" alt="vapor-three" className="start-content-img"/>
                    <div className="start-img-content">
                        <Link to="/components" className="start-content-link"><h1>Components</h1><p>Customizable UI elements, from Alerts to Cards and more.</p></Link>
                        <RxComponent1 size={40}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;