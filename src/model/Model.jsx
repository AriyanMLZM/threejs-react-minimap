import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { MapControls, OrbitControls } from '@react-three/drei'

import { City } from './'

const Model = () => {
  return (
    <Canvas
      shadows
      camera={{fov: 25}}
    >
      <Suspense fallback={null}>
        <City />
        <MapControls />
        {/* <OrbitControls /> */}
      </Suspense>
    </Canvas>
  )
}

export default Model
