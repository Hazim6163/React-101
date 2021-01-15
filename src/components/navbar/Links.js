import React from 'react'
import Button from './Button'

function Links(props) {
    return (
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            {!props.isLoggedIn && <Button name="login" handleClick={props.handleClick} />}
            {!props.isLoggedIn && <Button name="register" handleClick={props.handleClick} />}
            {props.isLoggedIn && <Button name="logout" handleClick={props.handleClick} />}
        </div>
    )
}

export default Links
