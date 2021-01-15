import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Links(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {!props.isLoggedIn && <Button name="login" handleClick={props.handleClick} />}
            {!props.isLoggedIn && <Button name="register" handleClick={props.handleClick} />}
            {props.isLoggedIn && <Button name="logout" handleClick={props.handleClick} />}
        </div>
    )
}

export default Links
