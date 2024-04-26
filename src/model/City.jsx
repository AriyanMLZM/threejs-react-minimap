import React from 'react'
import * as THREE from 'three'

const City = () => {
  const buildingMaterial = new THREE.MeshStandardMaterial({ color: 'gray' })
  const planeMaterial = new THREE.MeshBasicMaterial({ color: '#222' })
  
  const heartShape = new THREE.Shape()

  heartShape.moveTo(-1, 1)
  heartShape.lineTo(-3, 3)
  heartShape.lineTo(-3, 6)
  heartShape.lineTo(-1, 8)
  heartShape.lineTo(1, 6)
  heartShape.lineTo(1, 3)
  
  const geometry = new THREE.ExtrudeGeometry(heartShape, { depth: 8 })

  const planeg = new THREE.PlaneGeometry(50, 50)
  planeg.rotateX(-Math.PI / 2)

  return (
    <group dispose={null}>
      <mesh geometry={planeg} material={planeMaterial}/>
      <mesh
        receiveShadow
        castShadow
        geometry={geometry}
        material={buildingMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

export default City
