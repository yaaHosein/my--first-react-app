
export function Flowers(props) {
    return <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <img src={props.imageSource} alt={props.imageName} />
    </>
};