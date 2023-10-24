import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Players.css"
import { getPlayerById } from "../../../services/playerService"


export const PlayerDetails = () => {

    const [player, setPlayer] = useState({})

    const { playerId } = useParams()

    useEffect(() => {
        getPlayerById(playerId).then((data) => {
            const playerObj = data[0]
            setPlayer(playerObj)
        })
    }, [playerId])

    return <div className="posts">
         <img className="playerdetails-img" src={player.imageLink} alt="playerimg"/>
        <header className="posts-info post-body post-header">
            {player.name}
        </header>
        <div className="posts-info post-body">
            <span> Height: </span>
            {player.height}
        </div>
        <div className="posts-info post-body">
            <span> Weight: </span>
            {player.weight}
        </div>
        <div className="posts-info post-body">
            <span> 40 time: </span>
            {player.fortyTime}
        </div>

    </div>

}