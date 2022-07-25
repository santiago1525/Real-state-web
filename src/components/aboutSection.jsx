import React from 'react'
import styled from 'styled-components'
import {Button } from './Button'

const SectionWeb = styled.div`
    background: #000d1a;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    position: relative;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`
const SectionContent = styled.div`
    background: #fff;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;

    
`
const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10%;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
`
const SectionImage = styled.div`
    position: absolute;
    right: 0;

    img {
        width: 60vw;
        height: 500px;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 100%;
            height: 300px;
        }
    }
`

const SectionCell = styled.div`
    background: #000d1a;
    padding: 2rem;
    display: flex;
    gap: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const SectionTextCell = styled.div`
    color: #fff;
    text-align: center;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2rem;
    }

    
`

const SectionImageCell = styled.div`
    img {
        width: 100%;
    }
`


const AboutSection = () => {
  return (
    <>
        <SectionWeb>
            <SectionContent>
                <SectionText>
                    <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">Diseños Modernos</h2>
                    <Button to='/'
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">Saber más</Button>
                </SectionText>
                <SectionImage>
                <img src={require('../images/interior-2.jpg')} alt="diseños" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
                </SectionImage>
            </SectionContent>
            Section
        </SectionWeb>
        <SectionCell>
            <SectionTextCell>
                <h2 data-aos="zoom-in-down" data-aos-duration='1500'>Diseños Modernos</h2>
                <Button to='/' data-aos="zoom-in-down" data-aos-duration='1500'>Saber más</Button>
            </SectionTextCell>
            <SectionImageCell>
                <img src={require('../images/interior-2.jpg')} alt="diseños" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
            </SectionImageCell>
        </SectionCell>
    </>

  )
}

export default AboutSection