import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import Plant from './Plant'
import { Canvas } from '@react-three/fiber'

const Webdesign = () => {
  return (
    <Canvas camera={{ fov:25, position: [5, 5, 5] }}>
      <Stage environment="city" intensity={0.6}> 
      <Plant/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default Webdesign