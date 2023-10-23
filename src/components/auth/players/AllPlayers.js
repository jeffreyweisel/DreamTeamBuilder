import { useEffect, useState } from "react"
import { deletePlayer, getAllPlayers } from "../../../services/playerService"
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


    const handleDelete = (playerObj) => {
        deletePlayer(playerObj).then(res => res.json())
        .then(() => {
            getdata()
        })
    }
    return (


        <div className="post-container" >
            {players.map((playerObj) => {
                return (
                    <div className="posts" key={playerObj.id}>
                        <div>
                            <Link to={`/allplayers/${playerObj.id}`}>
                                <div className="post-info post-title" player={playerObj} >{playerObj.name}</div>
                            </Link>
                        </div>
                        <div className="post-info post-body">{playerObj.position.name}</div>
                        <div className="post-info post-body">{playerObj.imageUrl}</div>
                        <div className="btn-container">
                                {currentUser.id === 1 ? (<button
                                    className="btn btn-warning"
                                    onClick={() => handleDelete(playerObj)}
                                    
                                >
                                Delete</button>) : ""
                                }
                            </div>
                    </div>

                )
            })}
        </div>

    )
}



