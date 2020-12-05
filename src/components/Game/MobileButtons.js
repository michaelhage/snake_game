import React from 'react'
import {AiOutlineArrowDown, 
        AiOutlineArrowLeft, 
        AiOutlineArrowRight, 
        AiOutlineArrowUp} from 'react-icons/ai'

import {MobileArrowContainer, 
        MobileArrowDown, 
        MobileArrowLeft, 
        MobileArrowUp, 
        MobileArrowRight } from './GridElements'


function MobileButtons(props) {

    const handleClick = (keyCode) => {
        props.onKeyPress(keyCode)
    }

    return (
        <MobileArrowContainer>
            <MobileArrowUp
                onClick={()=>handleClick(38)}
            >
                <AiOutlineArrowUp 
                    size={"3vmin"}
                    color={"white"}
                />
            </MobileArrowUp>
            <MobileArrowRight
                onClick={()=>handleClick(39)}
            >
                <AiOutlineArrowRight 
                    size={"3vmin"}
                    color={"white"}
                />
            </MobileArrowRight>
            <MobileArrowLeft
                onClick={()=>handleClick(37)}
            >
                <AiOutlineArrowLeft 
                    size={"3vmin"}
                    color={"white"}
                />
            </MobileArrowLeft>
            <MobileArrowDown
                onClick={()=>handleClick(40)}
            >
                <AiOutlineArrowDown 
                    size={"3vmin"}
                    color={"white"}
                />
            </MobileArrowDown>
        </MobileArrowContainer>
    )
}

export default MobileButtons
