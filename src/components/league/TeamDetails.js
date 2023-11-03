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


    const qbs = team.players ? team.players.filter((player) => player.positionId === 1) : []
    const rbs = team.players ? team.players.filter((player) => player.positionId === 2) : []
    const wrs = team.players ? team.players.filter((player) => player.positionId === 3) : []
    const tes = team.players ? team.players.filter((player) => player.positionId === 4) : []
    


    return (

        <div>
            <div>

                <div className="team-hdr-container" key={team.id}>
                    <header className="team-hdr">{team?.name}</header>
                </div>

            </div>
            <div className="myplayer-container">
                <div className="pos-player">
                    <h5 className="pos-hdr">Quarterbacks</h5>
                    <div className="myplayers">
                    {qbs.map((p) => (
                        <div className="playersdiv" key={p.id}>
                            <img className="player-img" src={p.imageLink} alt="playerimg" />
                            <Link to={`/allplayers/${p.id}`}>
                                <div className="player-info player-title" player={p} >{p.name}</div>
                            </Link>
                           

                        </div>
                    ))}
                    </div>
                </div>
                <div className="pos-player">
                    <h5 className="pos-hdr">Runningbacks</h5>
                    <div className="myplayers">
                    {rbs.map((p) => (
                        <div className="playersdiv" key={p.id}>
                            <img className="player-img" src={p.imageLink} alt="playerimg" />
                            <Link to={`/allplayers/${p.id}`}>
                                <div className="player-info player-title" player={p} >{p.name}</div>
                            </Link>
                            

                        </div>
                    ))}
                </div>
                </div>
                <div className="pos-player">
                    <h5 className="pos-hdr">Wide Receivers</h5>
                    <div className="myplayers">
                    {wrs.map((p) => (
                        <div className="playersdiv" key={p.id}>
                            <img className="player-img" src={p.imageLink} alt="playerimg" />
                            <Link to={`/allplayers/${p.id}`}>
                                <div className="player-info player-title" player={p} >{p.name}</div>
                            </Link>
                            

                        </div>
                    ))}
                </div>
                </div>
                <div className="pos-player">
                    <h5 className="pos-hdr">Tight Ends</h5>
                    <div className="myplayers">
                    {tes.map((p) => (
                        <div className="playersdiv" key={p.id}>
                            <img className="player-img" src={p.imageLink} alt="playerimg" />
                            <Link to={`/allplayers/${p.id}`}>
                                <div className="player-info player-title" player={p} >{p.name}</div>
                            </Link>
                           

                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}