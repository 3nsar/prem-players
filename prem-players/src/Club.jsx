import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Club = () => {
  const url = "http://localhost:8080/api/player";
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setPlayers(response.data);
    });
  }, []);

  const clubs = [...new Set(players.map(p => p.club))];
  const filteredClubs = clubs.filter(club =>
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
      {filteredClubs.map((club, index) => (
        <div key={index}>
          <Link to={`/clubs/${encodeURIComponent(club)}`}>{club}</Link>
        </div>
      ))}
    </div>
  );
};

export default Club;
