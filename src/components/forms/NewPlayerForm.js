import { useState, useEffect } from "react"
import "./Forms.css"
import { useNavigate } from "react-router-dom"
import { addNewPlayer, getAllPositions } from "../../services/playerService"

export const NewPlayerForm = () => {

    const navigate = useNavigate()

    const [positions, setPositions] = useState([])
    const [selectedPosition, setSelectedPosition] = useState('')

    const [newPlayer, setNewPlayer] = useState({
        name: '',
        height: '',
        weight: '',
        fortyTime: '',
        teamId: 0,
        positionId: 0,
        imageLink: '',
        collegeAttended: ''
    })


    useEffect(() => {
        // Fetch all topics
        getAllPositions().then((pArray) => {
            setPositions(pArray)
            console.log(pArray)
        })

    }, [])


    const handleInputChange = (event) => {
        const stateCopy = { ...newPlayer }
        stateCopy[event.target.name] = event.target.value
        setNewPlayer(stateCopy)

    }

    const handleSave = (event) => {
        if (selectedPosition) {
            event.preventDefault()
            console.log('Clicked')

            addNewPlayer(newPlayer).then(() => {
                navigate(`/allplayers`)
            })

        }
    }

    //update positionId in newPlayer when the user selects a position
    useEffect(() => {
        setNewPlayer({
            ...newPlayer,
            positionId: parseInt(selectedPosition)      //spread operator to change positionId on onChange 
        })
    }, [selectedPosition])


    return (
        <form className="new-post">
            <h2>New Player</h2>
            <fieldset>
                <div className="radio">
                    <p className="position-radio">Position:</p>
                    <div className="buttons">
                        {positions.map((p) => (
                            <label key={p.id}>
                                <input
                                    type="radio"
                                    name="selectedPosition"
                                    value={p.id}
                                    checked={selectedPosition == p.id}
                                    onChange={(event) => setSelectedPosition(event.target.value)}
                                />
                                {p.name}
                            </label>
                        ))}
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={newPlayer.name}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Height:</label>
                    <input type="text"
                        value={newPlayer.height}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="height" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Weight:</label>
                    <input type="text"
                        value={newPlayer.weight}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="weight" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>40 Yard Dash:</label>
                    <input type="text"
                        value={newPlayer.fortyTime}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="fortyTime" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Image:</label>
                    <input type="text"
                        value={newPlayer.imageLink}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="imageLink" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>College:</label>
                    <input type="text"
                        value={newPlayer.collegeAttended}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        name="collegeAttended" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button
                        className="form-btn btn-primary"
                        onClick={handleSave}
                    >
                        Save Player
                    </button>
                </div>
            </fieldset>
        </form>
    )


}