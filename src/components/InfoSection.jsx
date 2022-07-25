import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';


const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;

  @media screen and (max-width: 768px) {
    padding; 1rem;
  }
  
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2 );
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
  }
  @media screen and (max-width: 500px) {
    grid-template-rows: 400px;
  }
  @media screen and (max-width: 400px) {
    grid-template-rows: 600px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
    padding: 1rem 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 100%;
    }
  }
`;

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
  return (
    <Section>
        <Container>
            <ColumnLeft reverse={reverse}>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to='/' primary='true'>{buttonLabel}</Button>
            </ColumnLeft>
            <ColumnRight reverse={reverse}>
                <img src={image} alt="" data-aos="zoom-out-down" data-aos-duration="1500"/>
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default InfoSection