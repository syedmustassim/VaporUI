import Card, { HorizontalCard, OverlayCard, ToggleCard } from "../components/Card/Card";
import { CodeBlock } from "react-code-blocks";
import {textCard, toggleCard, overlayCard, horizontalCard} from "./Codeblocks/CodeBlock"
import "./Documentation.css"
const CardDoc = () => {
    return (
      <div className="docs-container">
        <h1>Cards</h1>
        <p>Cards display content and actions about a single subject.</p>
        <h2>Text only cards: </h2>
        <p>Vertically aligned cards, that include cards with an outline, or elevated cards which incorporate shadows and filled cards which add a background color to the card.</p>
        <div className="av-container">
          <Card type="outlined" heading={"Autumn"}>Autumn is wonderful.</Card>
          <Card type="elevated" heading={"Summer"}>Summer is for the beach.</Card>
          <Card type="filled" heading={"Winter"}>Winter is to hibernate.</Card>
        </div>
        <h2>Toggle cards: </h2>
        <p>Clicking on the cross will close the card.</p>
        <div className="av-container">
          <ToggleCard type={"outlined"} heading={"Autumn"}>Autumn, often referred to as the "season of mists and mellow fruitfulness," is a time of transition and natural splendor. As the long, lazy days of summer gradually yield to cooler temperatures, the world transforms into a breathtaking tapestry of colors.</ToggleCard>
          <ToggleCard type={"elevated"} heading={"Summer"}>Summer, a season of sun-kissed days and balmy nights, invites us to embrace the warmth of the sun, savor ice cream treats, and create cherished memories under clear blue skies.</ToggleCard>
          <ToggleCard type={"filled"} heading={"Winter"}>Winter transforms the world into a wonderland of glistening snow, where nature rests beneath a pristine blanket. It's a season for cozy fireside moments, steaming cups of cocoa, and the magic of snowflakes.</ToggleCard>
        </div>
        <h2>Cards with overlay: </h2>
        <p>Cards with an image and overlay text along with content description. The card sizes are relative to the image sizes.</p>
        <div className="av-container">
          <OverlayCard source={"https://i.postimg.cc/3wkvf0CR/vapor-three.jpg"} name="overlay-img" overlayText={"Autumn"} type={"outlined"}> Autumn, often referred to as the "season of mists and mellow fruitfulness," is a time of transition and natural splendor. As the long, lazy days of summer gradually yield to cooler temperatures, the world transforms into a breathtaking tapestry of colors.</OverlayCard>
          <OverlayCard source={"https://i.postimg.cc/3wkvf0CR/vapor-three.jpg"} name="overlay-img" overlayText={"Autumn"} type={"elevated"}> Autumn, often referred to as the "season of mists and mellow fruitfulness," is a time of transition and natural splendor. As the long, lazy days of summer gradually yield to cooler temperatures, the world transforms into a breathtaking tapestry of colors.</OverlayCard>
          <OverlayCard source={"https://i.postimg.cc/qRhb58yj/vapor-one.jpg"} name="overlay-img" overlayText={"Autumn"} type={"filled"}> Autumn, often referred to as the "season of mists and mellow fruitfulness," is a time of transition and natural splendor. As the long, lazy days of summer gradually yield to cooler temperatures, the world transforms into a breathtaking tapestry of colors.</OverlayCard>
        </div>
        <h2>Horizontal cards</h2>
        <p>Cards where the content is aligned horizontally.</p>
        <div className="av-container">
          <HorizontalCard  source={"https://i.postimg.cc/3wkvf0CR/vapor-three.jpg"} name="overlay-img" >Autumn, often referred to as the "season of mists and mellow fruitfulness," is a time of transition and natural splendor. As the long, lazy days of summer gradually yield to cooler temperatures, the world transforms into a breathtaking tapestry of colors.</HorizontalCard>
        </div>
        <h2>Usage</h2>
        <h2>Text only cards</h2>
        <p>There are three different text only cards. Outlined, elevated and filled. Elevated, incorporates shadows behind the card, and filled cards have a colored background.</p>
        <p><CodeBlock text={textCard} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <h2>Toggle cards</h2>
        <p><CodeBlock text={toggleCard} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <h2>Overlay Card</h2>
        <p>Overlay cards include an image whose URL has to be provided via source, and an overlay heading which has to be provided using overlayText.</p>
        <p><CodeBlock text={overlayCard} language="jsx" showLineNumbers={false} className="code-block"/></p>
        <h2>Horizontal Card</h2>
        <p><CodeBlock text={horizontalCard} language="jsx" showLineNumbers={false} className="code-block"/></p>
      </div>
    );
  };
  
  export default CardDoc;