import Badge from "../components/Badge/Badge";
import "./Documentation.css"
const BadgeDoc = () => {
    return (
      <div className="docs-container">
        <h1>Badge Docs here</h1>
        <p>These will be the docs for the badge components.</p>
        <Badge icon="message" count={10} label={"mail"}></Badge>
        <Badge icon="chat" count={10} label={"chat"}></Badge>
        <Badge icon="meeting" count={10} label={"meet"}></Badge>
      </div>
    );
  };
  
  export default BadgeDoc;