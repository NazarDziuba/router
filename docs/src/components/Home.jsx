import {Outlet} from "react-router-dom";

export default function Home(){
    const mainText = "Hello World!";
    const arrText = Array.from(mainText);
    return (
        <div className="home-container">
        <div className="home-container-child" >
            <h1 className="home-h1">{arrText.map((ch, i) =>
            <span
                className="home-char"
                style={{"--i": i}}
                key={i}
            >
                {ch === " " ? "\u00A0" : ch}
            </span>
            )}</h1>
        </div>
            <Outlet />
        </div>
    )
}