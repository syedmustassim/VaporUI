import { useState } from "react";
import {GrClose} from "react-icons/gr"
import "./Card.css"
const Card = ({children, type, heading,}) => {
    return(
        <div className={type}>
            <h1>{heading}</h1>
            <p>{children}</p>
        </div>
    )
}

export default Card;

export const ToggleCard = ({heading, children, type}) => {
    const [showCard, setShowCard] = useState(true);
    return(
        <div className={type} style={{display: showCard ? "visible" : "none"}}>
            <div className="dismiss-icon" >
            <h1>{heading}</h1>
            <GrClose size={20} onClick={() => setShowCard(prev => !prev)}/>
            </div>
            <p>{children}</p>
        </div>
    )
}

export const OverlayCard = ({source, name, overlayText, type, children}) => {
    return(
        <div className={type}>
            <div className="overlay-card">
                <img src={source} alt={name} />
                <h1>{overlayText}</h1>
            </div>
            <p>{children}</p>
        </div>
    )
}

export const HorizontalCard = ({source, name, children}) => {
    return(
        <div className="horizontal-card">

            <img src={source} alt={name} />
                <p>{children}</p>


        </div>
    )
}