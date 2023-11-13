import { useEffect, useState } from "react";
import "./Players.css";
import {
  cutPlayer,
  getAllPlayers,
  getAllTeams,
} from "../../services/playerService";
import { Link } from "react-router-dom";

export const MyPlayers = ({ currentUser }) => {
  const [players, setPlayers] = useState([]);
  const [myTeam, setMyTeam] = useState([]);
  const [myPlayers, setMyPlayers] = useState([]);

  useEffect(() => {
    //async and await instead of .then seemed to fix infinite fetch problem
    const data = async () => {
      const pArray = await getAllPlayers();
      setPlayers(pArray);
    };

    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const teams = await getAllTeams();
      const userTeam = teams.find((t) => currentUser.id === t.userId);
      setMyTeam(userTeam);
    };

    data();
  }, [currentUser]);

  useEffect(() => {
    //filter players based on the teamId of the logged in user's team.
    if (myTeam) {
      const playersOnTeam = players.filter(
        (player) => player.teamId === myTeam.id
      );
      setMyPlayers(playersOnTeam);
    }
  }, [myTeam, players]);

  const handlePlayerCut = (player) => {
    const noTeamForYou = {
      id: player.id,
      name: player.name,
      teamId: 0,
      positionId: player.positionId,
      height: player.height,
      weight: player.weight,
      fortyTime: player.fortyTime,
      imageLink: player.imageLink,
      collegeAttended: player.collegeAttended,
    };
    cutPlayer(noTeamForYou).then(() => {
      const updatedMyTeam = myPlayers.filter((p) => p.id !== player.id); //removes the player that was cut by setting players to updatedPlayers
      setMyPlayers(updatedMyTeam);
    });
  };

  const qbs = myPlayers.filter((p) => p.position.name === "QB");
  const rbs = myPlayers.filter((p) => p.position.name === "RB");
  const wrs = myPlayers.filter((p) => p.position.name === "WR");
  const tes = myPlayers.filter((p) => p.position.name === "TE");

  return (
    <div>
      <div>
        {myTeam ? ( //check for myTeam being defined = true
          <div className="team-hdr-container" key={myTeam.id}>
            <header className="team-hdr">{myTeam.name}</header>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="myplayer-container">
        <div className="pos-player">
          <h5 className="pos-hdr">Quarterbacks</h5>
          <div className="myplayers">
            {qbs.map((p) => (
              <div className="playersdiv" key={p.id}>
                <img className="player-img" src={p.imageLink} alt="playerimg" />
                <Link to={`/allplayers/${p.id}`}>
                  <div className="player-info player-title" player={p}>
                    {p.name}
                  </div>
                </Link>
                <div className="btn-container">
                  {p.teamId === currentUser.id ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handlePlayerCut(p)}
                    >
                      CUT PLAYER
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pos-player">
          <h5 className="pos-hdr">Runningbacks</h5>
          <div className="myplayers">
            {rbs.map((p) => (
              <div className="playersdiv" key={p.id}>
                <img className="player-img" src={p.imageLink} alt="playerimg" />
                <Link to={`/allplayers/${p.id}`}>
                  <div className="player-info player-title" player={p}>
                    {p.name}
                  </div>
                </Link>
                <div className="btn-container">
                  {p.teamId === currentUser.id ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handlePlayerCut(p)}
                    >
                      CUT PLAYER
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pos-player">
          <h5 className="pos-hdr">Wide Receivers</h5>
          <div className="myplayers">
            {wrs.map((p) => (
              <div className="playersdiv" key={p.id}>
                <img className="player-img" src={p.imageLink} alt="playerimg" />
                <Link to={`/allplayers/${p.id}`}>
                  <div className="player-info player-title" player={p}>
                    {p.name}
                  </div>
                </Link>
                <div className="btn-container">
                  {p.teamId === currentUser.id ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handlePlayerCut(p)}
                    >
                      CUT PLAYER
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pos-player">
          <h5 className="pos-hdr">Tight Ends</h5>
          <div className="myplayers">
            {tes.map((p) => (
              <div className="playersdiv" key={p.id}>
                <img className="player-img" src={p.imageLink} alt="playerimg" />
                <Link to={`/allplayers/${p.id}`}>
                  <div className="player-info player-title" player={p}>
                    {p.name}
                  </div>
                </Link>
                <div className="btn-container">
                  {p.teamId === currentUser.id ? (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handlePlayerCut(p)}
                    >
                      CUT PLAYER
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
