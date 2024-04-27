import React from 'react'
import { useGLTF } from '@react-three/drei'

import modelGlb from '../assets/3d/tree3.glb'

const Tree3 = ({ cord }) => {
  const { nodes, materials } = useGLTF(modelGlb)

  return (
    <group scale={8} position={[cord[0], 0, cord[1]]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1932686607.geometry}
        material={materials.mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1932686607_1.geometry}
        material={materials.mat3}
      />
    </group>
  )
}

export default Tree3
