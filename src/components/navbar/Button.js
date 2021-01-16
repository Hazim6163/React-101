import React from 'react'

function Button(props) {

    let btn;

    switch (props.name) {
        case 'logout':
            btn = <button className="logout" onClick={() => { props.handleClick(props.name) }}>{props.name}</button>
            break;
        default:
            btn = <button onClick={() => { props.handleClick(props.name) }}>{props.name}</button>
            break;
    }

    return (
        btn
    )
}

export default Button
