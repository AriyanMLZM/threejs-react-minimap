import React from 'react'
import { useGLTF } from '@react-three/drei'

import modelGlb from '../assets/3d/tree1.glb'

const Tree1 = ({ cord }) => {
  const { nodes, materials } = useGLTF(modelGlb)

  return (
    <group scale={8} position={[cord[0], 0, cord[1]]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2112331936.geometry}
        material={materials.mat1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh2112331936_1.geometry}
        material={materials.mat2}
      />
    </group>
  )
}

export default Tree1
