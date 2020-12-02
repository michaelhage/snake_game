import React from 'react'

function Food(foodPos) {

    var food = <></>;

    if(foodPos){
        food = <Food 
            top={foodPos[0] + "%"}
            left={foodPos[1] + "%"}
        /> 
    }

    return (
        food
    )
}

export default Food
