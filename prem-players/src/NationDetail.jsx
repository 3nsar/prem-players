import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const NationDetail = () => {

const { nationalityName } = useParams();
  const url = `http://localhost:8080/api/player?nationality=${nationalityName}`;
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, [nationalityName]);

  return (
    <div>
      <h2>{nationalityName} Players</h2>
      {players.map((player, index) => (
        <div key={index} style={{borderBottom: '1px solid #ccc', marginBottom: '10px'}}>
          <p><strong>{player.player_name}</strong> ({player.position})</p>
          <p>Nationality: {player.nationality}</p>
          <p>Appearances: {player.appearances}</p>
          <p>Minutes: {player.minutes}</p>
          <p>Goals: {player.goals}</p>
          <p>Assists: {player.assists}</p>
          <p>Yellow Cards: {player.yellow_cards}</p>
          <p>Red Cards: {player.red_cards}</p>
        </div>
      ))}
      <Link to="/nationalities">← Back to Nations</Link>
    </div>
  );
};


export default NationDetail