function Card(props) {

    return (
         <div className = {props.className}>
            <h1> {props.title} </h1> 
            <h2> {props.subtitle} </h2>
            <p> {props.description} </p> 
        </div>
 
    );
}

export default Card;