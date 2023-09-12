import "./Text.css"

const Text = ({type, label}) => {
    return(
        <textarea className={type} placeholder={label}/>
    )
}

export default Text;
