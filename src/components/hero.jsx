import { styled } from "styled-components"
import Nvbr from "./nvbr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Section = styled.div`
  scroll-snap-align: start;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-self: center;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.div`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Blob = styled.div`
  background-image: url('./img/pp.jpeg');
  width: 380px;
  height: 380px;
  background-position: center;
  background-size: cover;
  margin: 20px;
  border: 5px solid black;
  box-shadow: 0 5px 5px 5px rgb(0, 0, 0);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @keyframes animate {
    0%, 100%{
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50%{
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }
`



function Hero() {
  return (
    <Section>
        <Nvbr/>
        <Container>
          <Left>
            <Title>Ahmet Özenir</Title>
            <WhatWeDo>
              <Line src="./img/line.png"></Line>
              <Subtitle>Front-End Web Dev.</Subtitle>
            </WhatWeDo>
            <Desc>React, JS, Bootstrap, Tailwind, SCSS</Desc>
            <BtnWrapper>
              <Button>GitHub <FontAwesomeIcon icon={faGithub} /></Button>
              <Button>Linkedin <FontAwesomeIcon icon={faLinkedin} /></Button>
            </BtnWrapper>
          </Left>
          <Right>
            <Blob/>
          </Right>
        </Container>
    </Section>
  )
}

export default Hero