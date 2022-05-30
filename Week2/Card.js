function Card(props) {

    return (
        <div>
          <img src={props.src} />
            {props.children}
        </div>
    );
}


// function Box({key, src, alt, desc, location})) {

//     return (
//         <div key = {key}>
//                 <img src = {src} alt = {alt} />
//                 <h4>{desc}</h4>
//                 <h5> I live in {location}</h5>

//         </div>
//     );
// }

export default Card;


