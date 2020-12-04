import React from 'react'
import {SidebarContainer, 
        Icon, 
        CloseIcon,
        SidebarLink,
        SidebarMenu,
        SidebarRoute,
        SideBtnWrap,
        SidebarWrapper} from './SidebarElements'


function Sidebar({isOpen, toggle}){
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu> 
                    <SidebarLink to="#" onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to="/about-us" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/contact-us" onClick={toggle}>Contact Us</SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Play Game</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
