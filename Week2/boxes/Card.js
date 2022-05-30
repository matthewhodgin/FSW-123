function Card(props) {

    return (
        <div>
          <img src={props.src} />
            {props.children}
        </div>
    );
}
export const Box = [
    {
        title: 1,
        subtitle: 1,
        desc: "Hello World 1!",
        bgColor: "red",
    },
    {
        title: 2,
        subtitle: 2,
        desc: "Hello World 2!",
        bgColor: "orange",
    },
    {
        title: 3,
        subtitle: 3,
        desc: "Hello World 3!",
        bgColor: "yellow",
    },
    {
        title: 4,
        subtitle: 4,
        desc: "Hello World 4!",
        bgColor: "green"
    }

];

export default Card;


