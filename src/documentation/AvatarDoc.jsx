import Avatar from "../components/Avatar/Avatar";
import "./Documentation.css"
const AvatarDoc = () => {
    return (
      <div className="docs-container">
        <h1>Avatar Docs here</h1>
        <p>These will be the docs for the avatar components.</p>
        <Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/>
      </div>
    );
  };
  
  export default AvatarDoc;