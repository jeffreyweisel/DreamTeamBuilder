import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getTeamById } from "../../services/playerService"





export const TeamDetails = () => {

    const [team, setTeam] = useState({})
    const { teamId } = useParams()

    useEffect(() => {
        getTeamById(teamId).then((data) => {
            const teamObj = data[0]
            setTeam(teamObj)
        })
    }, [teamId])

    return (

        <div>
            <div>

                <div className="team-hdr" key={team.id}>
                    <header >{team.name}</header>
                </div>

            </div>
            <div className="player-container">
                {team?.players?.map((p) => (
                    <div className="players" key={p.id}>
                        <img className="player-img" src={p.imageLink} alt="playerimg" />

                        <Link to={`/allplayers/${p.id}`}>
                            <div className="player-info player-title" player={p} >{p?.name}</div>
                        </Link>



                    </div>
                ))}
            </div>
        </div>
    )
}