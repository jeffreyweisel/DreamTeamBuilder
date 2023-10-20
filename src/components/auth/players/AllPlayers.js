import { useEffect, useState } from "react"
import { getAllPlayers } from "../../../services/playerService"
import { Link } from "react-router-dom"
import "./Players.css"


export const PlayerList = ({ currentUser }) => {

    const [players, setPlayers] = useState([])

    const getdata = () => {
        getAllPlayers().then((pArray) => {
            setPlayers(pArray)
        })
    }

    useEffect(() => {
        getdata()
    }, [])



    return (


        <div className="post-container" >
            {players.map((playerObj) => {
                return (
                    <div className="posts" key={playerObj.id}>
                        <div>
                            <Link to={`/allplayers/${playerObj.id}`}>
                                <div className="post-info post-title">{playerObj.name}</div>
                            </Link>
                        </div>
                        <div className="post-info post-body">{playerObj.position.name}</div>
                        <div className="post-info post-body">{playerObj.imageUrl}</div>
                    </div>

                )
            })}
        </div>

    )
}



