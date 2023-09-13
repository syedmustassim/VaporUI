import Image from "../components/Image/Image";
import { CodeBlock } from "react-code-blocks";
import { responsiveImg, roundedResImg } from "./Codeblocks/CodeBlock";
import "./Documentation.css"
const ImageDoc = () => {
    return (
        <div className="docs-container">
            <h1>Images</h1>
            <p>The Image component offers seamless integration of visuals into your web projects.</p>
            <p>It provides flexibility through various styling options, including responsive images that adapt to their container's width and rounded images for a softer, more aesthetic touch. With customizable classes, you have full control over the appearance and behavior of your images, making it easier than ever to craft visually appealing and user-friendly interfaces</p>
            <p>The two primary types of images are 'responsive' and 'rounded responsive' images.</p>
            <h2>Responsive image:</h2>
            <div className="av-container">
             <Image source={"https://i.postimg.cc/L6LySvYf/sail.jpg"} alt={"vapor"} type={"responsive"} />
            </div>
            <h2>Responsive rounded image:</h2>
            <div className="av-container">
             <Image source={"https://i.postimg.cc/L6LySvYf/sail.jpg"} alt={"vapor"} type={"responsive-rounded"} />
            </div>
            <h2>Usage</h2>
            <p>The Image component includes three attributes.</p>
            <p>source: takes in the URL source of the image</p>
            <p>name: takes in the name you want to give the image</p>
            <p>type: takes in two values. 'responsive' for normal responsive image, and 'responsive-rounded' for a rounded responsive image.</p>
            <h2>Responsive Image: </h2>
            <p><CodeBlock text={responsiveImg} language="jsx" showLineNumbers={false} className="code-block"/></p>
            <h2>Rounded responsive image:</h2>
            <p><CodeBlock text={roundedResImg} language="jsx" showLineNumbers={false} className="code-block"/></p>
        </div>
    )
}

export default ImageDoc;