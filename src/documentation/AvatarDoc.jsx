import Avatar from "../components/Avatar/Avatar";
import { CodeBlock } from "react-code-blocks";
import {avatarCode1} from "./Codeblocks/CodeBlock"
import "./Documentation.css"
const AvatarDoc = () => {
    return (
      <div className="docs-container">
        <h1>Avatars</h1>
        <p>The Avatar component is a visually appealing and versatile element designed to represent users, profiles, or entities in your web application. It adds a personal touch to your user interface and helps users identify with the content they interact with.</p>
        <h2>Key features:</h2>
        <ul>
          <li>Profile Images: Display user profile pictures, avatars, or images with ease. The Avatar component simplifies the process of rendering user images and ensures consistency in their presentation.</li>
          <li>Customization: Tailor the appearance of avatars to match your application's design guidelines. You can easily adjust their size, shape, and styling to align with your branding.</li>
          <li>Accessibility: The Avatar component is designed with accessibility in mind. It includes ARIA attributes to enhance usability for all users, including those who rely on assistive technologies.</li>
        </ul>
        <h2>Normal avatars: </h2>
        <div className="av-container">
          <Avatar name={"urahara"} size={"small"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"normal"}/>
          <Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"normal"}/>
          <Avatar name={"urahara"} size={"large"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"normal"}/>
        </div>
        <h2>Border avatars: </h2>
        <div className="av-container">
          <Avatar name={"urahara"} size={"small"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/>
          <Avatar name={"urahara"} size={"medium"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/>
          <Avatar name={"urahara"} size={"large"} source={"https://i.postimg.cc/fTYff9yW/urahichi.gif"} type={"with-border"}/>
        </div>
        <h2>Usage</h2>
        <p><CodeBlock text={avatarCode1} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <p>The avatar component consists of name, size, source and type attributes.</p>
        <p>Name and Source are the names you want to give to your avatar and the source image for the avatar respectively.</p>
        <p>Size can take three values, 'small', 'medium' and 'large'.</p>
        <p>Type can take two values, 'normal' and 'with-border'. This determines if you want your avatars to have a border or not.</p>
      </div>
    );
  };
  
  export default AvatarDoc;