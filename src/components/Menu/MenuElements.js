import styled from 'styled-components'

export const DarkModeConatiner = styled.div`
    display: flex;
    position: absolute;

    /* padding: 1vmin 1vmin 1vmin 1vmin; */

    top: calc(80px + 3vmin);
    right: 2vmin;
    padding: 1vmin 1vmin 1vmin 1vmin;
    z-index: 999;

    cursor: pointer;

    color: ${props => props.isDark ? "whitesmoke" : "blue"};

`;