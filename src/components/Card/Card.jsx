import "./Card.css"
const Card = ({children, type}) => {
    return(
        <div className={type}>
            {children}
        </div>
    )
}

export default Card;