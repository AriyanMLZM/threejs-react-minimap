import React from 'react'
import { useGLTF } from '@react-three/drei'

import modelGlb from '../assets/3d/tree2.glb'

const Tree2 = ({ cord }) => {
  const { nodes, materials } = useGLTF(modelGlb)

  return (
    <group
      scale={8}
      rotation={[0, 1, 0]}
      position={[cord[0], 0, cord[1]]}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh373735999.geometry}
        material={materials.mat3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh373735999_1.geometry}
        material={materials.mat4}
      />
    </group>
  )
}

export default Tree2
