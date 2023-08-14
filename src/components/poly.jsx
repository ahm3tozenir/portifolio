import React, {  useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'




function Poly() {

    const textRef = useRef()
    useFrame(state => (textRef.current.position.y = Math.sin(state.clock.elapsedTime)))




  return (
    <mesh>
        <dodecahedronGeometry/>
        <meshStandardMaterial>
            <RenderTexture  attach="map">
                <PerspectiveCamera makeDefault position={[0,0,9]}/>
                <color attach='background' args={["#2A3331"]}/>
                <Text ref={textRef} fontsize={3} color="#555">
                    Contact Me
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Poly