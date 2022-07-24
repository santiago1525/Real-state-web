import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';


const Section = styled.section`

`;
const Container = styled.div`

`;
const ColumnLeft = styled.div`

`;

const ColumnRight = styled.div`

`;

const InfoSection = () => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <h3>Heading</h3>
                <p>parrafo</p>
                <p>parrafo</p>
                <p>parrafo</p>
                <p>parrafo</p>
                <Button to='/homes'>label</Button>
            </ColumnLeft>
            <ColumnRight>
                <img src="" alt="" />
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default InfoSection