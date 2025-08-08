import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const url = "http://localhost:8080/api/player?club=Arsenal";

  const [player,setPlayer] = useState([]);

  useEffect(() =>{ 
    axios.get(url).then((response) => {
        setPlayer(response.data)
        console.log((response.data))
    })
}, []); 



  return (
          <>
        {player.map((item =>(
          <>
          <p>{item.player_name}</p>
          
          <p>{item.position}</p>
          <hr />
          </>
        )))}

      </>
  )
}

export default Home