import Stat from './Stat';
import {useState, useEffect} from "react"

export default function StatList({stats}) {
    const[teams,setTeams] = useState([])
        useEffect(
            () => {
                fetch("https://v1.basketball.api-sports.io/teams?id=139", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1.basketball.api-sports.io",
		"x-rapidapi-key": "80b49690ca8dde77db0ad38992529159"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.log(err);
});
            }
        )

    const statList = stats.map((stat) => {
        return <Stat key = {stat.id} stat={stat} />
    });

    return (
        <>
            <ul className="quarter-page">{statList}</ul>
            </>
    );
}