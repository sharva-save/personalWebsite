import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { AmbientLight } from "three";
import { Room } from "./Room";

import HeroLights  from "./HeroLights"

const HeroExperince = () => {
  const isTable = useMediaQuery({query : '(max-width : 1024)'})
  const ismobile = useMediaQuery({query : '(max-width : 768)'})
  return (
    <Canvas camera={{ position: [10, 0, 7], fov: 45 }}>


      <HeroLights/>

      <OrbitControls
      enablePan={false}
      enableZoom={false}
      maxDistance={20}
      minDistance={5}
      minPolarAngle={Math.PI /5}
      maxAzimuthAngle={Math.PI /2}
      />
      {/* <mesh>
               <boxGeometry args={[1,1,1]}/>
               <meshStandardMaterial color="teal"/>
      </mesh> */}
      <Room 
      scale ={ismobile ? 0.7 : 1}
      position={[0,-3.5, 0]}
      rotataio={[0.1 , -Math.PI / 4 ,0]}
      />
    </Canvas>
  );
};

export default HeroExperince;
