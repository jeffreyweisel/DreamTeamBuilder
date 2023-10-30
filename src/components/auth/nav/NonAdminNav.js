import { Link, useNavigate, useParams } from "react-router-dom"
import "./NavBar.css"
import { useEffect, useState } from "react"
import { getTeamByUserId } from "../../../services/playerService"





export const NonAdminNavBar = ({currentUser}) => {

    const navigate = useNavigate()
    

    const [team, setTeam] = useState({ name: ""})
    const { teamId } = useParams()

    useEffect(() => {
        getTeamByUserId(currentUser.id).then((data) => {
            const teamObj = data[0]
            setTeam(teamObj)
        })
    }, [currentUser])


    return (
        <ul className="navbar">
             <li className="navbar-item">
                {team?.name}
            </li>
            <li className="navbar-item">
                <Link to="/allplayers">Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myplayers">Lineup</Link>
            </li>
            <li className="navbar-item">
                <Link to="/league">League</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myteam">Manage</Link>
            </li>
            {localStorage.getItem("dreams_user") ? (
                <li className="navbar-item logout">
                    <Link
                        to=""
                        onClick={() => {
                            localStorage.removeItem("dreams_user")
                            navigate("/login", { replace: true })
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}