import { useEffect, useState } from "react"
import { addPlayerToTeam, deletePlayer, getAllPlayers } from "../../../services/playerService"
import { Link, useNavigate } from "react-router-dom"
import "./Players.css"


export const PlayerList = ({ currentUser }) => {

    const [players, setPlayers] = useState([])
    const navigate = useNavigate()

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

    const handlePlayerAddToTeam = (player) => {
        const playerUpdate = {
            name: player.name,
            height: player.height,
            weight: player.weight,
            fortyTime: player.fortyTime,
            positionId: player.positionId,
            teamId: currentUser.id,
            id: player.id,
            imageLink: player.imageLink
        }
      
        addPlayerToTeam(playerUpdate)
          .then(() => {
            console.log(playerUpdate)
            navigate('/myplayers')
          })
      }


    return (


        <div className="player-container" >
            {players.map((playerObj) => {
                return (

                    <div className="players" key={playerObj.id}>

                        <img className="player-img" src={playerObj.imageLink} alt="playerimg" />
                        <Link to={`/allplayers/${playerObj.id}`}>
                            <div className="player-info player-title" player={playerObj} >{playerObj?.name}</div>
                        </Link>
                        <div className="player-info player-body player-pos">{playerObj?.position.name}</div>
                        <div className="player-info player-body">{playerObj?.team?.name}</div>
                        <div className="btn-container">
                        {playerObj.teamId === 0 ? (<button
                                className="btn btn-delete"
                                onClick={() => handlePlayerAddToTeam(playerObj)}

                            >
                                ADD PLAYER</button>) : ""
                            }
                            {currentUser.id === 1 ? (<button
                                className="btn btn-delete"
                                onClick={() => handleDelete(playerObj)}

                            >
                                DELETE</button>) : ""
                            }
                            
                        </div>
                    </div>


                )
            })}
        </div>
    )
}





