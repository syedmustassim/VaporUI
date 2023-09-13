import "./Image.css"

const Image = ({source, name, type}) => {
    return(
        <img src={source} alt={name} className={type}/>
    )
}

export default Image;