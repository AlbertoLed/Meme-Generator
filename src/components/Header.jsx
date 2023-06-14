import React from 'react'
import logo from '../../public/logo.png'
import './Header.css'

function Header() {
    return(
        <header className='header'>
            <img src={logo} alt='Logo meme generator' />
            <h1 className='header__project-name'>React Course - Project 3</h1>
        </header>
    )
}

export default Header