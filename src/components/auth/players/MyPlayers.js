import { useEffect, useState } from "react"
import "./Players.css"
import { cutPlayer, getAllPlayers, getAllTeams } from "../../../services/playerService"
import { Link, useNavigate } from "react-router-dom"


export const MyPlayers = ({ currentUser }) => {

    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
    const [myTeam, setMyTeam] = useState([])
    const [myPlayers, setMyPlayers] = useState([])

    useEffect(() => {       //async and await instead of .then seemed to fix infinite fetch problem
        const data = async () => {
            const pArray = await getAllPlayers()
            setPlayers(pArray)
        }

        data()
    }, [])

    
    useEffect(() => {
        const data = async () => {
            const teams = await getAllTeams()
            const userTeam = teams.find((t) => currentUser.id === t.userId)
            setMyTeam(userTeam)
        }

        data()
    }, [currentUser])

    useEffect(() => {
        //filter players based on the teamId of the logged in user's team.
        if (myTeam) {
            const playersOnTeam = players.filter((player) => player.teamId === myTeam.id)
            setMyPlayers(playersOnTeam)
        }
    }, [myTeam, players])

    
    const handlePlayerCut = (player) => {
        const noTeamForYou = {
            id: player.id,
            name: player.name,
            teamId: 0,
            positionId: player.positionId,
            height: player.height,
            weight: player.weight,
            fortyTime: player.fortyTime,
            imageLink: player.imageLink,
            collegeAttended: player.collegeAttended
        }
        cutPlayer(noTeamForYou).then(() => {
            const updatedMyTeam = myPlayers.filter((p) => p.id !== player.id)  //checks that p.id that was cut is not = any of the players left on the team
            setMyPlayers(updatedMyTeam)
        })
    }
    
    return (
        <div>

            <div>
                {myTeam ? (        //check for myTeam being defined = true
                    <div className="team-hdr" key={myTeam.id}>
                        <header >{myTeam.name}</header>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="player-container">
                {myPlayers.map((p) => (
                    <div className="players" key={p.id}>
                        <img className="player-img" src={p.imageLink} alt="playerimg" />
                        <Link to={`/allplayers/${p.id}`}>
                            <div className="player-info player-title" player={p} >{p.name}</div>
                        </Link>
                        {p.teamId === currentUser.id ? (<button
                                    className="btn btn-delete"
                                    onClick={() => handlePlayerCut(p)}

                                >
                                    CUT PLAYER</button>) : ""
                                }

                    </div>
                ))}
            </div>
        </div>
    )
}



