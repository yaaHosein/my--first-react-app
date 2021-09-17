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

        )};
        {isShow && (
            <h3>{props.title}</h3>

        )};
        {isShow && (
            <img src={props.imageSource} alt={props.imageName} />
        )};

    </div >)
}
