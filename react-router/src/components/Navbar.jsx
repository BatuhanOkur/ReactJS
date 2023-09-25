import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
    </nav>
  )
}

export default Navbar