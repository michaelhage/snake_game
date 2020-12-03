import React from 'react'

import {FoodDot} from "./GridElements"

function Food(props) {

    return (
        <FoodDot
            left={"" + props.foodPos[0] + "%"}
            top={"" + props.foodPos[1] + "%"}
        /> 
    )
}

export default Food
