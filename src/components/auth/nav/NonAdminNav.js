import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"





export const NonAdminNavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/allplayers">Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myplayers">My Lineup</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myteam">Manage</Link>
            </li>
            {localStorage.getItem("dreams_user") ? (
                <li className="navbar-item">
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