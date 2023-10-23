import { Outlet, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { PlayerList } from "../components/auth/players/AllPlayers"
import { NavBar } from "../components/auth/nav/NavBar"
import { Welcome } from "../components/auth/welcome/Welcome"
import { PlayerDetails } from "../components/auth/players/PlayerDetails"
import { MyPlayers } from "../components/auth/players/MyPlayers"
import { TeamEditForm } from "../components/forms/TeamEditForm"


export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localDreamUser = localStorage.getItem("dreams_user")
        const dreamUserObject = JSON.parse(localDreamUser)

        setCurrentUser(dreamUserObject)
    }, [])


    return <>

        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />

                    <Outlet />
                </>
            }
            >
                <Route index element={<Welcome />} />

                <Route path="allplayers">
                    <Route index element={<PlayerList currentUser={currentUser} />} />
                    <Route path=":playerId" element={<PlayerDetails />} />
                </Route>
                <Route path="myplayers" element={<MyPlayers currentUser={currentUser}/>} />

                <Route path="myteam">
                    <Route index element={<TeamEditForm currentUser={currentUser}/>} />
                </Route>
            </Route>
        </Routes>

    </>
}