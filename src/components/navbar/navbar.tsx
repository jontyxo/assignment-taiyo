import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
        <span><Link className="link" to="/">
              Contact
            </Link>
            </span>
        <span><Link className="link" to="/map">
              Maps
            </Link></span>
        <span>Hi</span>
    </div>
  )
}

export default Navbar