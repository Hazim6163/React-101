import React, { useState } from 'react'
import Brand from './Brand'
import Button from './Button'
import Links from './Links'
import './navbar.css'
function Navbar() {
    const [isLoggedIn, setStatus] = useState(false)
    const handleClick = (name) => {
        switch (name) {
            case 'login':
                console.log('login')
                setStatus(true)
                break;
            case 'logout':
                console.log('logout')
                setStatus(false)
                break;
            case 'register':
                console.log('register')
                setStatus(false)
                break;
            default:
                break;
        }
    }
    return (
        <div className="navbar">
            <Brand />
            <Links handleClick={handleClick} isLoggedIn={isLoggedIn} />


        </div>
    )
}

export default Navbar
