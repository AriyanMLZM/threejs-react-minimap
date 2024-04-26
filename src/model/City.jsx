import React from 'react'
import * as THREE from 'three'

import data from '../json/data.json'

const City = () => {
  const planeGeo = new THREE.PlaneGeometry(50, 50)
  planeGeo.rotateX(-Math.PI / 2)

  const buildingMaterial = new THREE.MeshStandardMaterial({ color: 'gray' })
  const planeMaterial = new THREE.MeshBasicMaterial({ color: '#222' })

  const genBuilding = (cords, floorCount) => {
    const shape = new THREE.Shape()
    shape.moveTo(cords[0][0], cords[0][1])
    for (var i = 1, n = cords.length; i < n; i += 1) {
      shape.lineTo(cords[i][0], cords[i][1])
    }

    const geometry = new THREE.ExtrudeGeometry(shape, { depth: floorCount * 3 })
    geometry.rotateX(-Math.PI / 2)

    return geometry
  }

  return (
    <group dispose={null}>
      <mesh geometry={planeGeo} material={planeMaterial} />
      {data.buildings.map((building) => (
        <mesh
          geometry={genBuilding(building.cords, building.floorCount)}
          material={buildingMaterial}
        />
      ))}
    </group>
  )
}

export default City
