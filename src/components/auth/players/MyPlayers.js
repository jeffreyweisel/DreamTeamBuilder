import { useEffect, useState } from "react"
import "./Players.css"
import { getAllPlayers, getAllTeams } from "../../../services/playerService"
import { Link } from "react-router-dom"


export const MyPlayers = ({ currentUser }) => {

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

    return (
        <div>

            <div>
                {myTeam && (
                    <div className="team-hdr" key={myTeam.id}>
                        <header >{myTeam.name}</header>
                    </div>
                )}
            </div>

            <div className="post-container">


                {myPlayers.map((p) => (
                    <div className="posts" key={p.id}>
                        <img className="player-img" src={p.imageLink} alt="playerimg" />
                        <Link to={`/allplayers/${p.id}`}>
                            <div className="post-info post-title" player={p} >{p.name}</div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}

