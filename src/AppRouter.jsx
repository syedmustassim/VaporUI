import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";

const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/getstarted" element={<GetStarted/>} />
            </Routes>
        </div>
    )
}

export default AppRouter;