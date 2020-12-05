import styled from 'styled-components'

export const GameContainer = styled.div`
    /* position: relative; */
    
    height: calc(100vh - 80px);
    width: 100vw;
    background-color: ${props => props.isDark ? "#111" : "whitesmoke"};
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0;
`