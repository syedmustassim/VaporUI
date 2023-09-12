import "./Avatar.css"
const Avatar = ({name,source,size,type}) => {

    const findSize = (size) => {
        switch(size.toLowerCase()){
            case "small":
                return 60
            case "medium":
                return 80
            case "large":
                return 100
            default: 
                return 80
        }
    }
    return(
            <img src={source} alt={name} className={type} width={`${findSize(size)}px`} height={`${findSize(size)}px`}/>
    )
}

export default Avatar;