import { Outlet, Route, Routes } from "react-router-dom"

import { useEffect, useState } from "react"

import { PlayerList } from "../components/auth/players/AllPlayers"
import { NavBar } from "../components/auth/nav/NavBar"
import { Welcome } from "../components/auth/welcome/Welcome"
import { PlayerDetails } from "../components/auth/players/PlayerDetails"






export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("learning_user")
        const honeyUserObject = JSON.parse(localHoneyUser)

        setCurrentUser(honeyUserObject)
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
                    <Route index element={<PlayerList currentUser={currentUser}/>} />
                    <Route path=":playerId" element={<PlayerDetails currentUser={currentUser}/>} />
                </Route>
                <Route path="myplayers" element={"this is empty"} />

                <Route path="myteam">
                    <Route index element={"this is empty"} />
                </Route>
            </Route>
        </Routes>

    </>
}