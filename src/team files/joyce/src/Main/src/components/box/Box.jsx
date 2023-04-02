import React from 'react'
import './box.scss'

const Box = props => {
    const className = {
        box: 'box',
        blue: props.blue && 'box-blue',
        fullheight: props.fullheight && 'box-fullheight'
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default Box
