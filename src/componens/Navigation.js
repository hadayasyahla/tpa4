import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

function Navigation() {
  return (
    <div className="navbar">
        <nav className='list' style={{textDecoration:'none'}}>
            <Link className='list' to='/'>Home</Link> 
            <Link className='list' to='myskil'>Myskil</Link> 
            <Link className='list' to='about'>About</Link> 
            <Link className='list' to='artikel'>Artikel</Link>
            <br></br>
        </nav>
    </div>
  )
}

export default Navigation;