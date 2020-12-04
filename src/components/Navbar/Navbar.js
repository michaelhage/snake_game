import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
        Nav,
        NavLink,
        NavMenu,
        NavBtn,
        NavBtnLink,
        MobileIcon
    } from './NavbarElements';

function Navbar({toggle}) {
    // move Navbar to App.js when migrating to Github Pages
    // Look at Hashrouter when migrating to Github Pages

    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click)

    

    return (
        <div>
            <Nav>
                <NavLink to='/'>
                    <h1>SnakeGame</h1>
                </NavLink>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavLink to="/create-quiz" activeStyle>
                    Portfolio
                    </NavLink>
                
                    <NavLink to="/about-us" activeStyle>
                    About
                    </NavLink>
                
                    <NavLink to="/contact-us" activeStyle>
                    Contact Us
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/">Play Game</NavBtnLink>
                </NavBtn>


            </Nav>
        </div>
    )
}

export default Navbar