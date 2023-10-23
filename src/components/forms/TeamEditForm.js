import { useEffect, useState } from "react"
import "./Forms.css"
import { useNavigate } from "react-router-dom"
import { getTeamByUserId, updateTeam } from "../../services/playerService"


export const TeamEditForm = ({ currentUser }) => {

    const [team, setTeam] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getTeamByUserId(currentUser.id).then((data) => {
            const teamObj = data[0]
            setTeam(teamObj)
        })
    }, [currentUser])


    const handleSave = (event) => {
        event.preventDefault()
        console.log('Clicked')

        const editedTeam = {
            id: team.id,
            name: team.name,
            userId: currentUser.id

        }

        updateTeam(editedTeam).then(() => {
            navigate(`/myplayers`)
        })
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...team }
        stateCopy[event.target.name] = event.target.value
        setTeam(stateCopy)
    }

    return (

        
        <form className="profile">
            <h2>Update Team</h2>
            <fieldset>
                <div className="form-group">
                    <label>Team Name: </label>
                    <input
                        type="text"
                        // value={team.name ? team.name : ''}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="name" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <button
                        className="form-btn btn-primary"
                        onClick={handleSave}>

                        Save Changes
                    </button>
                </div>
            </fieldset>
        </form>
    )
}