// import PictureList from './PictureList';
// import { cats } from './data';

// function App3() {

//     return (
      
//         <PictureList cats = {cats} />
//   );
// }

// export default App3;



function App3() {

    const list = ["cat", "dog", "bird"];

    const listItems = list.map((item, index) => <li key ={index}>{item}</li>);


    return (
      
        <ul>{listItems}</ul>
  );
}

export default App3;