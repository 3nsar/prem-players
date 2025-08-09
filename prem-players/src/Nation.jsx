import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Nation = () => {

  const url = "http://localhost:8080/api/player";
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, []);

  const nationalities = [...new Set(players.map(p => p.nationality))];
  const filteredNations = nationalities.filter(club =>
    club.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search clubs..."
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>Clubs</h2>
      {filteredNations.map((nationality, index) => (
        <div key={index}>
          <Link to={`/nationalities/${encodeURIComponent(nationality)}`}>{nationality}</Link>
        </div>
      ))}
    </div>
  );
};


export default Nation