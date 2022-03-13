import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './customLink.module.css'
function CustomLink({children,to,...props}) {
  const setActive = ({isActive})=> isActive ? 'activeLink' :'' 
  return (
    <NavLink to={to} className={setActive} {...props}>
    {children}
    </NavLink>
  )
}

export default CustomLink