import { useEffect, useState } from "react"
import "./Players.css"
import { getAllPlayers, getAllTeams } from "../../../services/playerService"

export const MyPlayers = ({ currentUser }) => {

    const [players, setPlayers] = useState([])
    const [myTeam, setMyTeam] = useState([])
    const [myPlayers, setMyPlayers] = useState([])

    useEffect(() => {
        //fetch all players and set them 
        getAllPlayers().then((pArray) => {
            setPlayers(pArray)
        }, [])
    })

    useEffect(() => {
        //fetch all teams and find the team associated with logged in user.
        getAllTeams().then((teams) => {
            const userTeam = teams.find((t) => currentUser.id === t.userId)
            setMyTeam(userTeam)
        }, [currentUser])
    })

    useEffect(() => {
        //filter players based on the teamId of the logged in user's team.
        if (myTeam) {
            const playersOnTeam = players.filter((player) => player.teamId === myTeam.id)
            setMyPlayers(playersOnTeam)
        }
    }, [myTeam, players])

    return (
        <div className="post-container">
            {myTeam && (
                <div className="post-header" key={myTeam.id}>
                    <header >{myTeam.name}</header>
                </div>
            )}
            {myPlayers.map((p) => (
                <div className="posts" key={p.id}>
                    <div>{p.name}</div>
                </div>
            ))}
        </div>
    )
}

