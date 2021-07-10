import { useState } from "react/cjs/react.production.min"
export const Collapsable = () => {
    let [isShow, setIsShow] = useState(true);
    let buttonText = "";
    if (isShow) {
        buttonText = "Hide"
    } else {
        buttonText = "Show"
    }
    return
    <div>
        <button
            onClick={() => {
                setIsShow(!isShow);
            }}
        >
            {buttonText}
        </button>
        {isShow && (
            <p>
                "A magnificent variety, bearing large, many petalled rosette blooms. They are a striking shade of deep pink, the outer petals of each bloom paling slightly over time. The beauty of the blooms is enhanced by a wonderful, strong fruity fragrance."
            </p>
        )};F

    </div >
};
export function Flowers(props) {
    return <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <img src={props.imageSource} alt={props.imageName} />
    </>
};
