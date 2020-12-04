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
            <MobileArrowUp>
                <AiOutlineArrowUp 
                    size={"3vmin"}
                    onClick={()=>handleClick(38)}
                />
            </MobileArrowUp>
            <MobileArrowRight>
                <AiOutlineArrowRight 
                    size={"3vmin"}
                    onClick={()=>handleClick(39)}
                />
            </MobileArrowRight>
            <MobileArrowLeft>
                <AiOutlineArrowLeft 
                    size={"3vmin"}
                    onClick={()=>handleClick(37)}
                />
            </MobileArrowLeft>
            <MobileArrowDown>
                <AiOutlineArrowDown 
                    size={"3vmin"}
                    onClick={()=>handleClick(40)}
                />
            </MobileArrowDown>
        </MobileArrowContainer>
    )
}

export default MobileButtons
