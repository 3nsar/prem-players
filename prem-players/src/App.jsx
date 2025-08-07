import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';


function App() {

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
          <p>{item.player_name}</p>
        )))}

      </>
    
  )
}

export default App
