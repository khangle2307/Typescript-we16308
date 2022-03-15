import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
       <nav>
          <ul>
            <NavLink to={"/"} >Home page</NavLink>
            <NavLink to={"/product"} >Product</NavLink>
            <NavLink to={"/about"} >About</NavLink>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar

//tsrafce