import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Players.css"
import { getAllPlayers, getAllTeams } from "../../../services/playerService"

export const MyPlayers = ({currentUser}) => {
    



    const [players, setPlayers] = useState([])
    const [myPlayers, setMyPlayers] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getAllPlayers().then((pArray) => {
            setPlayers(pArray)
            console.log("players",pArray)

            const myPlayers = players.filter((p) => p.teamId === currentUser.teamId)
            setMyPlayers(myPlayers)
        
        })
    }, [])

    // useEffect(() => {

    //    getAllTeams().then((tArray) => {
    //     setTeams(tArray)
    //     console.log("teams",tArray)

    //    const myTeam = teams.filter((t) => t.userId === currentUser.id)
    //    setTeams(myTeam)
    //     console.log(myTeam)
    //    })

    // }, [])


    
    
    
    return (
        
            <div className="post-container" >
                {myPlayers.map((p) => {
                    
                    return (
                        <div className="posts"  key={p.id}>
                            <div>
                            {p.name}
                            </div>
                            
                        </div>
                        
                        

                    )
                })}
            </div>
        
    )       
  }                  

