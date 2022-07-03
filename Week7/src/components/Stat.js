import { useState, useContext } from "react";
import { StatsContext } from "../contexts/StatsContext";

export default function Stat({ stat }) {
    
    const {addStat} = useContext(StatsContext);
    const {putStat}= useContext(StatsContext);
    const {editStat} = useContext(StatsContext);
    const {deleteStat} = useContext(StatsContext);
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [player, setPlayer] = useState(stat.player);
    const [team, setTeam] = useState(stat.team);
    const [year, setYear] = useState(stat.year);

    const toggleEdit = () => {
        setEdit(!edit);
        setPlayer(player)
        setError(false)

    };

    const handlePlayerEdit = (evt) => {
        (evt.target.value === "") ? setError(true) : setError(false)
        setPlayer(evt.target.value);
    };

    const handleTeamEdit = (evt) => {
        (evt.target.value === "") ? setError(true) : setError(false)
        setTeam(evt.target.value);
    };

    const handleYearEdit = (evt) => {
        (evt.target.value === "") ? setError(true) : setError(false)
        setYear(evt.target.value);
    };

    const handleUpdate = (id, player, team, year) => {
        editStat(id, player, team, year);
        toggleEdit();
    };

    return (
        <li key = {stat.id}>
    
        {!edit ? (
            <div>
            <input
            type="checkbox"
            checked = { stat.isEdit }
            onChange={() => editStat(stat.id)}
            />
            <span style ={{ textDecoration: stat.isEdit ? "line-through":"none"}}>
            <button className="btn-small" onClick={() => deleteStat}>
                Click
            </button>
            </span> </div>
        ): <div></div>
        }</li>
    )
}