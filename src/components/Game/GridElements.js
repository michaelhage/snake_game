import styled from 'styled-components'

export const GridContainer = styled.div`
    background-color: #555;

    position: relative;

    width: calc(100vmin - 80px);
    height: calc(100vmin - 80px);
    
    /* display: grid; */
    /* grid-template-rows: repeat(40, 1fr); */
    /* grid-template-columns: repeat(40, 1fr); */
`

export const SnakeDot = styled.div`
    position: absolute;

    background-color: #00f;
    
    border: .1vmin solid black;
    height: 2%;
    width: 2%;
    
    top: ${props => props.top};
    left: ${props => props.left};
`

export const FoodDot = styled.div`
    position: absolute;

    background-color: #ff0;
    
    border: .1vmin solid black;
    height: 2%;
    width: 2%;

    top: ${props => props.top};
    left: ${props => props.left};
`

export const GameOverContainer = styled.div`
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    background-color: #256ce1;
    
    border: .5vmin solid black;
    height: 25vmin;
    width: 20vmin;

    z-index: 999;
`;

export const GameOverText = styled.h1`
    font-size: 3vmin;

    color: #fff;
    /* background-color: #256ce1; */

    margin: 2vmin auto 2vmin auto;
    text-align: center;
`

export const ResetButton = styled.div`
    /* border-radius: 4px; */
    background: #256ce1;
    padding: 4vmin 4vmin 4vmin 4vmin;
    
    max-height: 12vmin;
    width: 100%;

    color: #fff;
    outline: none;
    
    /* border: none; */
    cursor: pointer;
    
    text-align: center;

    transition: all 0.3s ease-in-out;
    text-decoration: none;
    
    &:hover {
    transition: all 0.3s ease-in-out;
    /* background: #fff; */
    color: #000;
    }
`

