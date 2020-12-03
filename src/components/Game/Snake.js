import React from 'react'
import { SnakeDot } from './GridElements'

function Snake(props) {

    // console.log(props)

    var arr = []
    if(props.snakePos){
        arr = props.snakePos.map((dot, index) => {

            return(
                <SnakeDot
                    key={index}
                    left={"" + dot[0] + "%"}
                    top={"" + dot[1] + "%"}
                />
            )
        })
    }

    return (
        arr
    )
}

export default Snake
