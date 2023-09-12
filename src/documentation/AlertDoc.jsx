import Alert from "../components/Alert/Alert";
import { CodeBlock } from "react-code-blocks";
import { alertCode } from "./Codeblocks/AlertCode";
import "./Documentation.css"

const AlertDoc = () => {

  return (
    <div className="docs-container">
      <h1> Alerts </h1>
      <p>The Alert component is a versatile notification element designed to keep your users informed and engaged. It's a fundamental building block for providing feedback, alerts, and messages within your web applications. The Alert component is designed to be simple and intuitive to use. </p>
      <p>You can manage your alerts and display them based on the level of their severity. The severities are categorised as follows: </p>
      <ul>
        <li>Success</li>
        <li>Error</li>
        <li>Warning</li>
        <li>Information</li>
      </ul>
      <p>The alerts are as follows: </p>
      <div className="docs-secondary">
        <Alert severity={"success"}>This is a success alert!</Alert>
        <Alert severity={"error"}>This is an error alert!</Alert>
        <Alert severity={"warning"}>This is a warning alert!</Alert>
        <Alert severity={"info"}>This is an info alert!</Alert>
      </div>
      <h1>Usage</h1>
      <h3>To use these alerts in your web application, install the component library, and import the Alert component.</h3>
      <p><CodeBlock text={alertCode} language="jsx" showLineNumbers={false} className="code-block"/></p>
    </div>
  );
};

export default AlertDoc;
