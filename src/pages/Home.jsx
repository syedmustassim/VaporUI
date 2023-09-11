import "./Home.css"
const Home = () => {
    return(
        <div className="home-container">
            <div className="home-main">
                <img src="https://i.postimg.cc/qRhb58yj/vapor-one.jpg" alt="vapor" className="vapor-img"/>
                <h1 className="home-heading">Vapor UI</h1>
                <p className="home-content">Vapor-1 aims to simplify your design and development workflow, so you can create stunning, user-friendly experiences.</p>
                <button className="home-btn">Get Started</button>
            </div>

        </div>
    )
}

export default Home;