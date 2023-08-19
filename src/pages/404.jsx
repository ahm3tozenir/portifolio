import React from 'react'
import Cube from '../components/cube'
import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { styled } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;

`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 58px;
  color: #E6FBFB;
`

const WhatWeDo = styled.div`
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
  color: #3DFFD5;
`

const Button = styled.div`
  background-color: #2A3331;
  transition: 0.3s ease-in-out;
  color: white;
  font-weight: 500;
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #2a3331cc;
  }
`

function Index404() {
  return (
    <Section>
        <Container>
          <Left>
            <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]}/>
              <Cube/>
          </Canvas>
          </Left>
          <Right>
            <Title>We couldn’t find that page.</Title>
            <WhatWeDo>
              <Line></Line>
              <Subtitle>404 <FontAwesomeIcon icon={faFaceSadTear} /></Subtitle>
            </WhatWeDo>
            <Button><Link className='link' to={'/portifolio/'}>Click To Return HomePage</Link></Button>
          </Right>
        </Container>
    </Section>
  )
}

export default Index404