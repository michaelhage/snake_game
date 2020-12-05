import React from 'react'
import { GridContainer } from './GridElements';
import Snake from './Snake';
import Food from './Food'
import MobileButtons from './MobileButtons';

function Grid(props) {

    return (
        <GridContainer
            isDark={props.isDark}
        >
            <MobileButtons 
                onKeyPress={props.onKeyPress}
            />
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
