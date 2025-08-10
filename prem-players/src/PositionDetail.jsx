import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const NationDetail = () => {

const { positionName } = useParams();
  const url = `http://localhost:8080/api/player?position=${positionName}`;
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, [positionName]);

  return (
    <div>
      <h2>{positionName} Players</h2>
      {players.map((player, index) => (
        <div key={index} style={{borderBottom: '1px solid #ccc', marginBottom: '10px'}}>
          <p><strong>{player.player_name}</strong> ({player.position})</p>
          <p>Club: {player.club}</p>
          <p>Nationality: {player.nationality}</p>
          <p>Appearances: {player.appearances}</p>
          <p>Minutes: {player.minutes}</p>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Yellow Cards: {player.yellow_cards}</p>
          <p>Red Cards: {player.red_cards}</p>
        </div>
      ))}
      <Link to="/positions">← Back to Positions</Link>
    </div>
  );
};


export default NationDetail