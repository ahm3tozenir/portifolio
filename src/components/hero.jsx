import { styled } from "styled-components"
import Nvbr from "./nvbr"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Section = styled.div`
  height: 100vh;
  min-height: 613px;
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

  @media screen and (max-width: 768px){
    width: 95%;
  }

  /* @media screen and (max-width: 576px){
    flex-direction: column;
  } */
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

  @media screen and (max-width: 1374px){
    font-size: 60px;
  }

  @media screen and (max-width: 768px){
    font-size: 40px;
  }
`

const JobTitle = styled.div`
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

  @media screen and (max-width: 1374px){
    font-size: 30px;
  }

  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

const Desc = styled.p`
  font-size: 24px;
  color: #deebeb;

  @media screen and (max-width: 1374px){
    font-size: 22px;
  }

  @media screen and (max-width: 768px){
    font-size: 18px;
  }
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

  @media screen and (max-width: 768px){
    width: 120px;
    padding: 8px;
  }
`

const GitBtn = styled(Button)`
  background-color: #010409;
  &:hover{
    box-shadow: 0 0 5px 2px #010409;
    background-color: white;
    .social{
      color: #010409;
    }
  }
`

const LinBtn = styled(Button)`
  background-color: #0B66C2;
  &:hover{
    box-shadow: 0 0 5px 2px #0B66C2;
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

  @media screen and (max-width: 576px){
    display: none;
  }
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

  @media screen and (max-width: 1374px){
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 768px){
    width: 270px;
    height: 270px;
  }
  
`



function Hero() {
  return (
    <Section>
        <Nvbr/>
        <Container>
          <Left>
            <Title>Ahmet Özenir</Title>
            <JobTitle>
              <Line></Line>
              <Subtitle>Front-End Web Dev.</Subtitle>
            </JobTitle>
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