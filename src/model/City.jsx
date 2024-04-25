import React from 'react'
import * as THREE from 'three'

const City = () => {
  const x = 0,
    y = 0

  const heartShape = new THREE.Shape()

  heartShape.moveTo(0, 0)
  heartShape.lineTo(0.5, 2.1)
  heartShape.lineTo(3, 2)
  heartShape.lineTo(3, 1)

  const geometry = new THREE.ExtrudeGeometry(heartShape, {depth: 5})
  const material = new THREE.MeshStandardMaterial({ color: '#111' })
  
  return (
    <group dispose={null}>
      <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow castShadow name="heart" geometry={geometry} material={material} />
    </group>
  )
}

export default City
