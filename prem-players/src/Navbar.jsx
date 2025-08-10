import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
          <h1>PremPlayers</h1>
            <ul>
              <Link  to='/'> <li>Home</li> </Link>
              <Link  to='/clubs'> <li>Clubs</li> </Link>
              <Link  to='/nationalities'> <li>Nation</li> </Link>
              <Link  to='positions'> <li>Position</li> </Link>
          </ul>
      </div>
    </div>
  )
}

export default Navbar