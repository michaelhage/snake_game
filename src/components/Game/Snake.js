import React from 'react'
import { SnakeDot } from './GridElements'

function Snake(props) {

    const arr = props.snakePos.map((dot, index) => {

        return(
            <SnakeDot
                key={index}
                top={"" + dot[0] + "%"}
                left={"" + dot[1] + "%"}
            />
        )
    })

    return (
        arr
    )
}

export default Snake
