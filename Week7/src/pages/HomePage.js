export default function Home() {

    const homeStyle = {
        listStyleType: 'square',
    }

    return (
        <>
            <h3>Home Page</h3>
            <ul style={homeStyle}>
                <li>
                    View <a href="/stats">Stats List</a>
                </li>
                {/* <li>
                    Go to <a href="/stats">Quiz</a>
                </li> */}
                </ul>
                <hr />
                <img src="https://www.api-basketball.com/public/img/home1/hero-banner.png"
                    alt="Basketball Player" />
   </>
    )
}