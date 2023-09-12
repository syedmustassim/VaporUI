import "./Headings.css"
const Headings = ({type,children}) => {
    return(
        <div className={type}>
            {children}
        </div>
    )
}

export default Headings;    