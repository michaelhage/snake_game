import React from 'react'
import { GridContainer } from './GridElements';
import Snake from './Snake';
import Food from './Food'

function Grid() {

    const arr = [
                    [0,0],
                    [0,2],
                    [0,4],
                ]

    const foodArr = [4,4];

    console.log(foodArr)

    return (
        <GridContainer>
            <Snake
                snakePos={arr}
            />
            <Food
                foodPos={foodArr}
            />
        </GridContainer>
    )
}

export default Grid;
