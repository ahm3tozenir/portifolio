import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function Cube() {

    const textRef = useRef()
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)))

  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture  attach="map">
                <PerspectiveCamera makeDefault position={[0,0,5]}/>
                <color attach='background' args={["#dc9dcd"]}/>
                <Text ref={textRef} fontsize={3} color="#555">
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube