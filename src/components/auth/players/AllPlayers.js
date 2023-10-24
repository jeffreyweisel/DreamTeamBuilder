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
        deletePlayer(playerObj)
            .then(() => {
                getdata()
            })
    }





    return (


        <div className="post-container" >
            
            {players.map((playerObj) => {
                return (
                    
                        
                    <div className="posts" key={playerObj.id}>

                        <img className="player-img" src={playerObj.imageLink} alt="playerimg" />
                        <Link to={`/allplayers/${playerObj.id}`}>
                            <div className="post-info post-title" player={playerObj} >{playerObj.name}</div>
                        </Link>
                        <div className="post-info post-body">{playerObj.position.name}</div>

                        <div className="btn-container">
                            {playerObj.teamId === 0 ? (<button
                                className=" btn-delete"


                            >
                                Add Player</button>) : ""
                            }
                            {currentUser.id === 1 ? (<button
                                className="btn btn-delete"
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



