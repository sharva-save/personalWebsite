import React from 'react'
import { AmbientLight } from "three";

const HeroLights = () => {
  return (
    <>

     {/* <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5,5,5]} intensity={2}/> */}
      <spotLight
        position={[1, 2, 4]}
        angle={0.4}
        penumbra={0.1}
        color={'#b388ff'}
        intensity={45}  
      />

  <spotLight
        position={[10, 10, 10]}
        angle={0.32}
        penumbra={0.1}
        color={'#fff'}
        intensity={150}  
      />


    <spotLight
        position={[10, 1, 2]}
        angle={0.8}
        penumbra={0.1}
        color={'#e0f2f1'}
        intensity={120}  
      />

  <spotLight
        position={[2, 2, 2]}
        angle={0.09}
        penumbra={0.1}
        color={'#fff'}
        intensity={100}  
      />
           
    </>
  )
}

export default HeroLights
