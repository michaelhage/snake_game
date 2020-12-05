import React from 'react'
import { DarkModeConatiner } from './MenuElements'
import {FaMoon, FaSun} from "react-icons/fa";

function DarkMode(props) {

    const handleClick = () =>{
        props.toggleDarkMode()
    }

    return (
        <DarkModeConatiner
            onClick={() => {handleClick()}}
            isDark={props.isDark}
        >
            {props.isDark ? 
                
                <FaMoon
                    size={"3vmin"}
                /> : 
                <FaSun
                    size={"3vmin"}
                />
            }
            
        </DarkModeConatiner>
    )
}

export default DarkMode
