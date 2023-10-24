import { Outlet, Route, Routes } from "react-router-dom"
import { TeamEditForm } from "../components/forms/TeamEditForm"
import { AdminNavBar } from "../components/auth/nav/AdminNavBar"
import { Welcome } from "../components/auth/welcome/Welcome"
import { PlayerList } from "../components/auth/players/AllPlayers"
import { PlayerDetails } from "../components/auth/players/PlayerDetails"
import { MyPlayers } from "../components/auth/players/MyPlayers"
import { NewPlayerForm } from "../components/forms/NewPlayerForm"



export const AdminView = ({currentUser}) => {


    return <>

    <Routes>
        <Route path="/" element={
            <>
                <AdminNavBar />

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
            <Route path="addplayer">
                <Route index element={<NewPlayerForm currentUser={currentUser}/>} />
            </Route>
        </Route>
    </Routes>

</>
}