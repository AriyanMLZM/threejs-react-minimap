import React from 'react'
import * as THREE from 'three'

const City = () => {
  const buildingMaterial = new THREE.MeshStandardMaterial({ color: 'gray' })
  const planeMaterial = new THREE.MeshBasicMaterial({ color: '#222' })
  
  const heartShape = new THREE.Shape()

  heartShape.moveTo(0, 0)
  heartShape.lineTo(0.5, 2.1)
  heartShape.lineTo(4, 2)
  heartShape.lineTo(5, 0.4)
  heartShape.lineTo(2, -0.4)

  const geometry = new THREE.ExtrudeGeometry(heartShape, { depth: 6 })

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
