import { useState } from "react"
export function Flowers(props) {
    let [isShow, setIsShow] = useState(true);
    let buttonText = null;
    if (isShow) {
        buttonText = "Hide"
    } else {
        buttonText = "Show"
    }
    return (<div>
        <button
            onClick={() => {
                setIsShow(!isShow);
            }}>
            {buttonText}
        </button>
        {isShow && (
            <p>{props.description}</p>
            {items}
        )};

        <h3>{props.title}</h3>
        <img src={props.imageSource} alt={props.imageName} />
    </div >)
}
