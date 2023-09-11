import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import AlertDoc from "./documentation/AlertDoc";
import Components from "./pages/Components";

const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/getstarted" element={<GetStarted/>} />
                <Route path="/components" element={<Components/>} />
                <Route path="/components/alerts" element={<AlertDoc/>} />
            </Routes>
        </div>
    )
}

export default AppRouter;