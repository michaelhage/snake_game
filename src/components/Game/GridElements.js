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

export const Food = styled.div`
    position: absolute;

    background-color: #ff0;
    border: .25vmin solid black;

    top: ${props => props.top};
    left: ${props => props.left};
`

export const GridSquares = styled.div`
    display: inline-block;
    height: 2vw;
    width: 2vw;

    /* border: 2px solid blue; */
    margin: 0 0 0 0;
    background-color: #ccc;
`

