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
  color: #E6FBFB;
`

const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.div`
  background-color: #535861;
  width: 25px;
  height: 5px;
  border-radius: 4px;
`

const Subtitle = styled.h2`
  color: #2A3331;
`

const Desc = styled.p`
  font-size: 24px;
  color: #deebeb;
`

const Button = styled.div`
  background-color: #2A3331;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`

const GitBtn = styled(Button)`
  background-color: #010409;
  &:hover{
    background-color: white;
    .social{
      color: #010409;
    }
  }
`

const LinBtn = styled(Button)`
  background-color: #0B66C2;
  &:hover{
    background-color: white;
    .social{
      color: #0B66C2;
    }
  }
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
            <Skills>
              <Line></Line>
              <Subtitle>Front-End Web Dev.</Subtitle>
            </Skills>
            <Desc>React, JS, Bootstrap, Tailwind, SCSS</Desc>
            <BtnWrapper>
              <GitBtn><a className="social" href="">GitHub <FontAwesomeIcon style={{fontSize:'1.3rem', marginLeft:'5px'}} icon={faGithub} /></a></GitBtn>
              <LinBtn><a className="social" href="">Linkedin <FontAwesomeIcon style={{fontSize:'1.3rem', marginLeft:'5px'}} icon={faLinkedin} /></a></LinBtn>
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