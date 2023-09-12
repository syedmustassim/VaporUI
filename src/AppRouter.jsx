import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import AlertDoc from "./documentation/AlertDoc";
import Components from "./pages/Components";
import AvatarDoc from "./documentation/AvatarDoc";
import BadgeDoc from "./documentation/BadgeDoc";
import ButtonDoc from "./documentation/ButtonDoc";
import CardDoc from "./documentation/CardDoc";
import HeadingDoc from "./documentation/HeadingDoc";
import TextDoc from "./documentation/TextDoc";

const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/getstarted" element={<GetStarted/>} />
                <Route path="/components" element={<Components/>} />
                <Route path="/components/alerts" element={<AlertDoc/>} />
                <Route path="/components/avatar" element={<AvatarDoc/>} />
                <Route path="/components/badge" element={<BadgeDoc/>} />
                <Route path="/components/button" element={<ButtonDoc/>} />
                <Route path="/components/cards" element={<CardDoc/>} />
                <Route path="/components/heading" element={<HeadingDoc/>} />
                <Route path="/components/text" element={<TextDoc/>} />
            </Routes>
        </div>
    )
}

export default AppRouter;