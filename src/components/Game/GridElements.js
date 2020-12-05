import styled from 'styled-components'

export const GridContainer = styled.div`
    background-color: ${props => props.isDark ? "#555" : "#999"};

    position: absolute;

    width: calc(100vmin - 80px);
    height: calc(100vmin - 80px);
    
    border: ${props => props.isDark ? "none" : ".2vmin solid red"};

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

export const MenuContainer = styled.div`
    position: absolute;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    background-color: #256ce1;
    
    border: .5vmin solid black;
    height: 25vmin;
    width: 20vmin;

    z-index: ${props => props.zIndex};
`

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

export const MobileArrowContainer = styled.div`
    position: absolute;
    z-index: 2;
    display: none;

    @media screen and (max-width: 1000px){
        display: block;
    }
`

export const MobileArrowUp = styled.div`
    position: relative;

    /* margin: auto; */
    top: 0;

    padding: 1vmin 0;

    cursor: pointer;

    text-align: center;
    justify-content: center;

    height: 15vmin;
    width: calc(100vmin - 80px);


    /* background-color: red; */
    opacity: 100%;
`

export const MobileArrowLeft = styled.div`
    position: relative;

    left: 0;

    /* calculation for padding center */
    /* 70/2 = 35 */
    /* 80 / 2 = 40 */
    padding: calc(35vmin - 40px) 1vmin;

    text-align: left;
    justify-content: center;

    cursor: pointer;

    height: calc(70vmin - 80px);
    width: 15vmin;

    /* background-color: purple;  */
    opacity: 100%;
`

export const MobileArrowDown = styled.div`
    position: relative;

    /* margin: auto; */
    bottom: 0;

    padding: 11vmin 0 0 0;

    text-align: center;
    justify-content: center;

    cursor: pointer;

    height: 15vmin;
    width: calc(100vmin - 80px);

    /* background-color: green;  */
    opacity: 100%;
`

export const MobileArrowRight = styled.div`
    /* position: relative; */

    /* margin: auto; */
    right: 0;
    /* top: 5vmin; */
    
    padding: calc(35vmin - 40px) 1vmin;

    float: right;

    cursor: pointer;

    text-align: right;
    justify-content: center;

    height: calc(70vmin - 80px);
    width: 15vmin;

    opacity: 100%;
    /* background-color: yellow; */
`