import React from 'react'
import {BiReset} from 'react-icons/bi'

import { MenuContainer, GameOverText, ResetButton } from './GridElements'


function GameOver(props) {

    return (
        <MenuContainer
            zIndex={3}
        >
            <GameOverText>
                
                {props.isWin ? "  You Win!!!  " : "  You Lose!!!  "}
                
                Score: {props.score}

            </GameOverText>

            <ResetButton
                onClick={() => {props.resetGame()} }
            >
                <BiReset size={"4vmin"}/>
            </ResetButton>
        </MenuContainer>
    )
}

export default GameOver
