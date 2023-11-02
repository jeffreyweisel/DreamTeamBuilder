import { useNavigate } from "react-router-dom"
import "./Welcome.css"

export const Welcome = () => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/allplayers')
    }

    return (
        <div className="welcome-container">

            <h1>
                <span>Dream Team Builder</span>
            </h1>
            <div>
                <p>1. Build Your Team: Select your roster from a list of available players to create the most formidable lineup.</p>
                <p>2. Optimize Your Lineup: Continuously enhance your team's performance by making strategic player additions and subtractions.</p>
                <p>3. Assess the Competition: Analyze your rivals' lineups and make adjustments to your own team as necessary.</p>
                <p>4. Manage Team Settings: Customize your team's identity by changing its name.</p>
            </div>
            <div className="welcomebtn">
                <button className="btn btn-primary"
                    onClick={handleButtonClick}>
                    Get Started
                </button>
            </div>


        </div>
    )
}