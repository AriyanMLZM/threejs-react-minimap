import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { MapControls } from '@react-three/drei'

import { City } from './'

const Model = () => {
  return (
    <Canvas
      shadows
      camera={{fov: 35, position: [30, 20, 30]}}
    >
      <Suspense fallback={null}>
        <directionalLight color={'#fff'} position={[50, 50, 50]} intensity={1}/>
        <directionalLight color={'#fff'} position={[-50, 50, -50]} intensity={1}/>
        <hemisphereLight groundColor={'#000'} intensity={0.5}/>
        <City />
        <MapControls />
      </Suspense>
    </Canvas>
  )
}

export default Model
