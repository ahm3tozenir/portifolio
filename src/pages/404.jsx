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

const Button = styled.div`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
              <Line src="./img/line.png"></Line>
              <Subtitle>404 <FontAwesomeIcon icon={faFaceSadTear} /></Subtitle>
            </WhatWeDo>
            <Button><Link className='link' to={'/'}>Click To Return HomePage</Link></Button>
          </Right>
        </Container>
    </Section>
  )
}

export default Index404