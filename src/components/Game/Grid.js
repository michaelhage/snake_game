import React from 'react'
import { GridContainer } from './GridElements';
import Snake from './Snake';
import Food from './Food'

function Grid(props) {

    // console.log(props)

    return (
        <GridContainer>
            <Snake
                snakePos={props.snakePos}
            />
            <Food
                foodPos={props.foodPos}
            />
        </GridContainer>
    )
}

export default Grid;
