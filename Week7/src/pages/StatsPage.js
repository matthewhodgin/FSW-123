import StatList from '../components/StatList';
import { useState } from 'react';
import {v4 as uuidv4 } from "uuid";
import { listofstats } from "../stats";
import { StatsContext } from '../contexts/StatsContext';

export default function StatsPage({type}) {

let statsList = '';
if (localStorage.getItem(type+'List') === null) {
    console.log("Local Storage? \n", localStorage.getItem(type+'List'));

switch (type) {
    case 'stats':
        statsList = listofstats;
        break;

     default:
        statsList = listofstats;
        break;
}
} else {
    statsList = JSON.parse(window.localStorage.getItem(type+'List'));
    console.log("Stats list parsed? \n", statsList);
};

const [stats, setStats] = useState(statsList);

let temporaryStats = '';
let newStats = '';
let index = '';

const storeStats = (stats) => {
    window.localStorage.setItem(type+'List', JSON.stringify(stats));
};

const addStat = (player, team, year) => {
    newStats = [
        ...stats,
        {
        id: uuidv4(),
        player: player,
        team: team,
        year: year
        }
    ];
    setStats(newStats);
    storeStats(newStats);
}

const putStat = (id) => {
    temporaryStats = [...stats];
    index = temporaryStats.findIndex(stats => stats.id === id);
    temporaryStats[index].isUpdated = !temporaryStats[index].isUpdated;
    setStats(temporaryStats);
    storeStats(temporaryStats);
}

const editStat = (id, player, team, year) => {
    temporaryStats = [...stats];
    index = temporaryStats.findIndex(stat => stat.id === id);
    temporaryStats[index].player = player;
    temporaryStats[index].team = team;
    temporaryStats[index].year = year;
    setStats(temporaryStats);
    storeStats(temporaryStats);
}

const deleteStat = (id) => {
    newStats = stats.filter((stat) => stat.id !== id);
    setStats(temporaryStats);
    storeStats(temporaryStats);
}

return (
    <>
    <StatsContext.Provider value={{ putStat, addStat, editStat, deleteStat }}>
    <h3> List of {type}s Stats</h3>
    <StatList stats={stats} />
    <div className="form">
        <h5>Add new {type} with the input: </h5>
        {/* <FormaddStat /> */}
    </div>
    </StatsContext.Provider>
    </>
);

}