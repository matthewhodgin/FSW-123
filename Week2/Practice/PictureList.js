import Picture from './Picture';

function PictureList({cats}) {

    const catList = cats.map((cat) => {
            return (
                <Picture
                    key = {cat.id}
                    src = {cat.src}
                    alt = {cat.desc}
                    desc = {cat.desc}
                    location = {cat.location}
                />

    );
    
})

    return (
        <>
            {catList}
        </>
    );
}


// const list = cats.map((cat) => {
//     return (
//         <div key = {cat.id}> 
//             <img src = {cat.src} alt = {cat.desc} />
//             <h4>{cat.desc}</h4>
//             <h5> I live in {cat.location}</h5>
//         </div>

// )

// });

// return (
// <>
//     {list}
// </>
// );
// }

export default PictureList