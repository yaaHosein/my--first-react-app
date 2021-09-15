import './App.css';
import { Flowers } from "./Flowers";
import data from "./data.json";

function App() {
    return (
        <div className="App">
            <Flowers title="GABRIEL OAK" description="A magnificent variety, bearing large, many petalled rosette blooms. They are a striking shade of deep pink, the outer petals of each bloom paling slightly over time. The beauty of the blooms is enhanced by a wonderful, strong fruity fragrance." imageSource="/images/GABRIEL OAK.jpg" imageName="GABRIEL OAK" />
            <Flowers title="SILAS MARNER" description="Bears flowers of the most perfect formation – shallow cups of the purest mid pink. They flower very freely from early summer until well into the autumn and have a strong, pure Old Rose fragrance." imageSource="/images/SILAS MARNER.jpg" imageName="SILAS MARNER" />
            <Flowers title="HARLOW CARR" description="Bears flowers of the most perfect formation – shallow cups of the purest mid pink. They flower very freely from early summer until well into the autumn and have a strong, pure Old Rose fragrance." imageSource="/images/HARLOW CARR.jpg" imageName="HARLOW CARR" />
        </div>
    );

}
const items = data.map(function (item) {
    return
    <Flowers
        title={item.title}
        description={item.description}
        imagePath={item.imagePath}
    />
    return (
        <div>
            {items}
        </div>
    )
});
export default App;




