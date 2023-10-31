import { useEffect, useState } from "react"
import { getAllTeams } from "../../services/playerService"
import { Link } from "react-router-dom"



export const League = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        getAllTeams().then((tArray) => {
            setTeams(tArray)
        })
    }, [])




    return (
        <div className="team-container">
            {teams
                .filter((t) => t.id !== 0)
                .map((t) => (
                    <div className="teams" key={t.id}>
                        <Link to={`/league/${t.id}`}>
                            <div className="player-info player-title">{t?.name}</div>
                        </Link>
                        <div className="player-info player-body player-pos">Coach: {t.user?.name}</div>
                    </div>
                ))}
        </div>
    )


}








