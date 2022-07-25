import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';

const FooterContainer = styled.footer`
    background: #000d1a;
    width: 100%;
    padding: 3rem;
    display: flex;
    alig-items: center;
    justify-content: space-around;


    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    h1 {
        color: #fff;
        font-size: 3rem;
        line-height: 1.5;
    }

    @media screen and (max-width: 900px) {
        text-align: center;
        align-items: center;
    }
`;


const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    alig-items: center;
    justify-content: center;
    gap: 50px;

`;

const InfoList = styled.ul`
    list-style: none;
    color #eee;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    
    li {
        cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        text-align: center;
        align-items: center;
    }
`;

const SocialList = styled.ul`
    list-style: none;
    color: #CD853F;
    display: flex;
    alig-items: center;
    justify-content: flex-start;
    gap: 30px;

    li {
        cursor: pointer;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 900px) {
        text-align: center;
        justify-content: center;
    }

`;

const Footer = () => {
  return (
    <FooterContainer>
        <ColumnLeft>
            <h1>Dejanos encontrar <br></br> tu vivienda soñada</h1>
            <Button to='/'>Contáctanos</Button>
        </ColumnLeft>
        <ColumnRight>
            <InfoList>
                <li>Terminos y Condiciones</li>
                <li>Nuestra Empresa</li>
                <li>Trabaja con Nosotros</li>
                <li>Soporte</li>
            </InfoList>
            <SocialList>
                <li><BsInstagram /></li>
                <li><BsFacebook /></li>
                <li><BsTwitter /></li>
            </SocialList>
        </ColumnRight>
    </FooterContainer>
  )
}

export default Footer