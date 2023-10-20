import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"





export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/allplayers">All Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myplayers">My Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myteam">My Team</Link>
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