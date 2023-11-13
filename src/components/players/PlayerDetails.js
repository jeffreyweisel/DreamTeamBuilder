import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Players.css";
import { getPlayerById } from "../../services/playerService";

export const PlayerDetails = () => {
  const [player, setPlayer] = useState({});

  const { playerId } = useParams(); 

  useEffect(() => {
    getPlayerById(playerId).then((data) => {
      const playerObj = data[0];
      setPlayer(playerObj);
    });
  }, [playerId]);

  return (
    <div className="playersdetail">
      <img
        className="playerdetails-img"
        src={player?.imageLink}
        alt="playerimg"
      />
      <header className="players-info player-body player-header">
        {player?.name}
      </header>

      <div className="players-info player-body">
        <span> College: </span>
        {player?.collegeAttended}
      </div>
      <div className="players-info player-body">
        <span> Current Team: </span>
        {player?.team?.name ? player.team.name : "Free Agent"}
      </div>
      <div className="players-info player-body">
        <span> Height: </span>
        {player?.height}
      </div>
      <div className="players-info player-body">
        <span> Weight: </span>
        {player?.weight}
      </div>
      <div className="players-info player-body">
        <span> 40 time: </span>
        {player?.fortyTime}
      </div>
    </div>
  );
};
