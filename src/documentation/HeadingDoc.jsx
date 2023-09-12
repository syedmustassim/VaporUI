import Headings from "../components/Headings/Headings";
import { CodeBlock } from "react-code-blocks";
import { xlHeading, xlHeadingItalic} from "./Codeblocks/CodeBlock";
import "./Documentation.css"
const HeadingDoc = () => {
    return (
      <div className="docs-container">
        <h1>Headings</h1>
        <p>Headings are essential to elevate the typography and hierarchy of your web application. With a wide range of heading styles, sizes, and variations, it simplifies the creation of clear and visually engaging content structures. </p>
        <p>The various headings are as follows:</p>
        <div className="hd-container">
          <Headings type="xl">Extra Large Heading</Headings>
          <Headings type="xl-italic">Extra Large Heading Italic</Headings>
          <Headings type="large">Large Heading</Headings>
          <Headings type="large-italic">Large Heading Italic</Headings>
          <Headings type="medium">Medium Heading</Headings>
          <Headings type="medium-italic"> Medium Heading Italic</Headings>
          <Headings type="small">Small Heading</Headings>
          <Headings type="small-italic">Small Heading Italic</Headings>
        </div>
        <hr/>
        <h2>Usage</h2>
        <h2>Extra large heading</h2>
        <p>Import the Heading component and pass the value of 'xl' to the type attribute for Extra Large headings.</p>
        <p><CodeBlock text={xlHeading} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <h2>Extra large heading italic</h2>
        <p>Just add '-italic' to the prexisting type 'xl' and that will achieve italic styling.</p>
        <p><CodeBlock text={xlHeadingItalic} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <p>The type attribute takes the following values:</p>
        <ul>
          <li>Large: type="large"</li>
          <li>Large Italic: type="large-italic"</li>
          <li>Medium: type="medium"</li>
          <li>Medium Italic: type="medium-italic"</li>
          <li>Small: type="small"</li>
          <li>Small Italic: type="small-italic"</li>
        </ul>
      </div>
    );
  };
  
  export default HeadingDoc;