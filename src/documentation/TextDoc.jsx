import Text from "../components/Text/Text";
import { CodeBlock } from "react-code-blocks";
import {filledText, outlinedText} from "./Codeblocks/CodeBlock"
import "./Documentation.css"
const TextDoc = () => {
    return (
      <div className="docs-container">
        <h1>Text fields</h1>
        <p>Text fields let users enter text into a UI.</p>
        <p>There are two types of text fields, primarily filled and outlined. </p>
        <p>Filled text-fields will have a background color that is easy on the eyes for the users.</p>
        <p>Outlined text-fields will change the color of the outline when focused.</p>
        <h2>Text fields demo</h2>
        <div className="av-container">
          <Text type={"filled-text"} label={"Enter text here"}/>
          <Text type={"outlined-text"} label={"Enter text here"}/>
        </div>
        <h2>Usage</h2>
        <p>Once you have the library installed, import the Text component.</p>
        <p>The component has two attributes. A type and label.</p>
        <p>Type: takes two values. Either 'filled-text', which gives a filled text field or 'outlined-text', which gives an outlined text field.</p>
        <p><CodeBlock text={filledText} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <p><CodeBlock text={outlinedText} language="jsx" showLineNumbers={false}/></p>
      </div>
    );
  };
  
  export default TextDoc;