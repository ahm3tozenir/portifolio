import React, { useEffect, useRef, useState } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



function Cube() {

    const textRef = useRef()
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime)))

    const [msg,setMsg] = useState('404');
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        setTimeout(function(){
            setCounter(counter+1)
        }, 5000); 
        
    },[counter])

    const [pos,setPos] = useState(1);
    

    useEffect(()=>{
        if(msg==='404'){
            setMsg("We couldn’t find that page")
            setPos(16)
        }else{
            setMsg('404')
            setPos(1)
        }
    },[counter])

  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture  attach="map">
                <PerspectiveCamera makeDefault position={[0,0,pos]}/>
                <color attach='background' args={["#3DFFD5"]}/>
                <Text ref={textRef} fontsize={3} color="#555">
                    {msg}
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube