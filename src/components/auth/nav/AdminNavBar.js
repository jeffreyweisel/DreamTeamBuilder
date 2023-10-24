import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"





export const AdminNavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li>
            <img className="navbar-item nav-img" src="https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/stylized-football-outline-sticker-31413-550x550.png" alt="football"/>
            </li>
            <li className="navbar-item">
                <Link to="/allplayers">All Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myplayers">My Players</Link>
            </li>
            <li className="navbar-item">
                <Link to="/myteam">My Team</Link>
            </li>
            <li className="navbar-item">
                <Link to="/addplayer">Add Player</Link>
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