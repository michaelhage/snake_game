import React, { Component } from 'react'

import { GameContainer } from './GeneralElements'
import Grid from "../components/Game/Grid"
import GameOver from '../components/Game/GameOver'
import Menu from '../components/Menu/Menu'
import DarkMode from '../components/Menu/DarkMode'

export default class Game extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            
            // determine food pos
            foodPos: [],
            
            // initial snake pos
            snakePos: [
                [10,10],
                [12,10],
                [14,10],
                [16,10],
                [18,10],
            ],

            // determine direction of snake
            // right default direction
            snakeDirection: [2,0],

            // refresh time of game
            speed: 200,

            gameOver: false,
            isWin: false,

            isDark: true,
        }

        this.onKeyPress = this.onKeyPress.bind(this)
        this.randomFoodPlacement = this.randomFoodPlacement.bind(this)
        this.checkFoodPlacement = this.checkFoodPlacement.bind(this)
        this.moveSnake = this.moveSnake.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.checkCollision = this.checkCollision.bind(this)
        this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }
    
    componentDidMount(){
        
        // create keyboard event listener
        document.addEventListener("keydown", this.onKeyPress, false);

        this.interval = setInterval(this.moveSnake, this.state.speed)

        // call random food placement 
        this.randomFoodPlacement()
    }
    
    componentWillUnmount(){

        // unmount all event listeners and 
        document.addEventListener("keydown", this.onKeyPress, false);
        clearInterval(this.interval);
    }

    moveSnake(){
        let gameOver = this.state.gameOver

        if(!gameOver){
            let snake = this.state.snakePos
            let head = snake[snake.length - 1]

            let vector = this.state.snakeDirection
            let newHead = [
                head[0] + vector[0],
                head[1] + vector[1]   
            ]

            let gameOver = this.state.gameOver
            let isWin = this.state.isWin
            
            if(this.checkCollision(newHead, snake)){
                this.setState({
                    gameOver: true,
                })
                // this.resetGame()
            }

            else{
                if(newHead[0] === this.state.foodPos[0] 
                    && newHead[1] === this.state.foodPos[1]){
                    
                    snake.push(newHead)
                    
                    // max length of snake 2025
                    if(snake.length - 5 === 100){
                        
                        gameOver = true
                        isWin = true
                        
                    } else {
                        this.randomFoodPlacement()
                    }
                } else{
                    // push new head into front of array
                    snake.push(newHead)
    
                    // remove last entry
                    snake.shift()
                }

                // set new snake position 
                this.setState({
                    snakePos: snake,
                    gameOver: gameOver,
                    isWin: isWin,
                })
            }
        }
    }

    resetGame(){

        // initial conditions
        this.setState({
            snakePos: [
                [10,10],
                [12,10],
                [14,10],
                [16,10],
                [18,10],
            ],
            snakeDirection: [2,0],
            
            gameOver: false,
            isWin: false,
        })

        // reset food placement
        this.randomFoodPlacement()
    }

    checkCollision(newHead, snake){
        
        if(newHead[0] < 0 || newHead[0] >= 100 
            || newHead[1] < 0 || newHead[1] >= 100){
                return true
        }

        for(var i = 0; i < snake.length; i++){
            if(newHead[0] === snake[i][0] 
                && newHead[1] === snake[i][1]){
                    return true
                }
        }

        return false
    }


    onKeyPress(e){
        
        let code
        
        if(e.keyCode){
            code = e.keyCode
        } else {
            code = e
        }

        if(code === 37 || code === 65){
            
            // left
            this.setState({snakeDirection: [-2,0]})
        } 
        else if(code === 38 || code === 87){
            
            // up
            this.setState({snakeDirection: [0,-2]})
        }
        else if(code === 39 || code === 68){
            
            // right
            this.setState({snakeDirection: [2,0]})
        }
        else if(code === 40 || code === 83){
            // down
            this.setState({snakeDirection: [0,2]})
        }
    }

    randomFoodPlacement(){
        var max = 45

        do {
            var randX = (Math.floor( Math.random() * max ))*2
            var randY = (Math.floor( Math.random() * max ))*2
        } while(this.checkFoodPlacement(randX, randY))

        this.setState({
            foodPos: [randX, randY]
        })
    }

    checkFoodPlacement(randX, randY){
        for(var i = 0; i < this.state.snakePos; i++){
            if(this.state.snakePos[0] === randX && this.state.snakePos[1] === randY){
                console.log("this works")
                return true
            }
        }

        return false
    }

    toggleDarkMode(){
        this.setState( prevState => ({
            isDark: !prevState.isDark
        }))
    }

    render() {

        return (
            <GameContainer
                isDark={this.state.isDark}
            >
                <Grid 
                    foodPos={this.state.foodPos}
                    snakePos={this.state.snakePos}
                    onKeyPress={this.onKeyPress}
                    isDark={this.state.isDark}
                />
                {this.state.gameOver && 
                    <GameOver 
                        resetGame={this.resetGame}
                        isWin={this.state.isWin}
                        score={this.state.snakePos.length - 5}
                    />
                }
                {/* <Menu /> */}
                <DarkMode 
                    toggleDarkMode={this.toggleDarkMode}
                    isDark={this.state.isDark}
                />
            </GameContainer>
        )
    }
}
