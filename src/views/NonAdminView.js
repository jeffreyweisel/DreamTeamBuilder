import { Outlet, Route, Routes } from "react-router-dom"
import { TeamEditForm } from "../components/forms/TeamEditForm"
import { Welcome } from "../components/auth/welcome/Welcome"
import { PlayerList } from "../components/auth/players/AllPlayers"
import { PlayerDetails } from "../components/auth/players/PlayerDetails"
import { MyPlayers } from "../components/auth/players/MyPlayers"
import { NonAdminNavBar } from "../components/auth/nav/NonAdminNav"
import { League } from "../components/league/League"
import { TeamDetails } from "../components/league/TeamDetails"




export const NonAdminView = ({currentUser}) => {


    return <>

    <Routes>
        <Route path="/" element={
            <>
                <NonAdminNavBar currentUser={currentUser} />

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
            <Route path="league">
                <Route index element={<League currentUser={currentUser}/>} />
                <Route path=":teamId" element={<TeamDetails currentUser={{currentUser}} />} />
            </Route>
        </Route>
    </Routes>

</>
}