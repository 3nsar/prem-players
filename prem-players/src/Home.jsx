import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const url = "http://localhost:8080/api/player";

  const [player,setPlayer] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() =>{ 
    axios.get(url).then((response) => {
        setPlayer(response.data)
        console.log((response.data))
    })
}, []); 



  return (
     <div>
        <input type="text" placeholder='Search...' onChange={(event)=>{setSearch(event.target.value)}}/>

        {player.filter((val)=>{
            if(val == ""){
                return val
            }else if(val.player_name.toLowerCase().includes(search)){
                return val
            }
        }).map((val, key) =>{
            return(
                <div key={key}>
                        <h1>{val.player_name}</h1>
                </div>
                
            )
        })
        }

    </div>
  )
}

export default Home