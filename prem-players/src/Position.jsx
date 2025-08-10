import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Position = () => {

  const url = "http://localhost:8080/api/player";
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, []);

  const positions = [...new Set(players.map(p => p.position))];
  const filteredPositions = positions.filter(club =>
    club.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search nations..."
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>Position</h2>
      {filteredPositions.map((position, index) => (
        <div key={index}>
          <Link to={`/positions/${encodeURIComponent(position)}`}>{position}</Link>
        </div>
      ))}
    </div>
  );
};


export default Position