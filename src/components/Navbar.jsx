import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import {menuData} from '../data/MenuData'
import {MdSegment} from 'react-icons/md'

const Nav = styled.nav`
    height: 60px;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    paddinng: 0 1rem;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
`;


const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-size: 1.5rem;
`;

const MenuBars = styled(MdSegment)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: #fff;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
        <Logo to='/'>Real State</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            {
                menuData.map((item, index) => {
                    return (
                        <NavMenuLinks to={item.link} key={index} >
                            {item.title}
                        </NavMenuLinks>
                    )
                })
            }
        </NavMenu>
        <NavBtn>
           <Button to='/'primary='true'>Contáctanos</Button> 
        </NavBtn>
    </Nav>
  )
}

export default Navbar