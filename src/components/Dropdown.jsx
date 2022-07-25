import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 60%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0; 
    right: ${({isOpen}) => (isOpen ? '0': '-100%')};
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1': '0')};

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

const Icon = styled.div`
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    outline: none;
    background: transparent;
`;

const CloseIcon = styled(FaTimes)`
    transition: .3s;

    &:hover {
        font-size: 1.8rem;
    }
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    border-top: 10px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    list-style: none;
    user-select: none;
    transition: .2s ease-in-out;

    &:hover {
        border-bottom: 2px solid #fff;
    }

`;
const BtnWrap = styled.div`
    display: flex; 
    justify-content: center;
    user-select:none;
    max-width: 100%;
`;

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {
                    menuData.map((item, index) => {
                        return (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        )
                    })
                }
            </DropdownMenu>
        </DropdownWrapper>
        <BtnWrap>
            <Button primary='true' round='true' big='true' to='/'>
                Contáctanos
            </Button>
        </BtnWrap>
    </DropdownContainer>
  )
}

export default Dropdown