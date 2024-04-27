import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { MapControls } from '@react-three/drei'

import { Buildings, Trees } from '.'

const Scene = () => {
  return (
    <Canvas shadows camera={{ fov: 35, position: [60, 30, 20] }}>
      <Suspense fallback={null}>
        <directionalLight
          color={'#fff'}
          position={[50, 50, 40]}
          intensity={1}
        />
        <directionalLight
          color={'#fff'}
          position={[-50, 50, -40]}
          intensity={1}
        />
        <hemisphereLight groundColor={'#000'} intensity={0.5} />
        <Buildings />
        <Trees />
        <MapControls maxDistance={100} minDistance={20} />
      </Suspense>
    </Canvas>
  )
}

export default Scene
