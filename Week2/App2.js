import Picture from './Picture';
import Button from './Button'
import { cats } from '.data';

function App2() {

    const foundCat = cats.find((cat) => cat.location === "Phoenix")
    // const image = {
    //     id: 1,
    //     src: "https://placekitten.com/200/300",
    //     desc: "My cat",
    //     location: "Arizona",

    if (foundCat) {

    return (
          <Picture src= {foundCat.src} alt = {foundCat.desc}>
              <h3>{foundCat.desc}</h3>
              <h5> I live in {foundCat.location}</h5>
              <Button />
          </Picture>

        //   <Picture src= {image.src}>
        //       <h3>{image.desc}</h3>
        //       <h5> I live in {image.location}</h5>
        //       <Button />
        //   </Picture>
    )

    }  else {

      return ( <h1> No cats found!! </h1> );
    }
}

export default App2;