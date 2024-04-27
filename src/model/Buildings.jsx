import React from 'react'
import * as THREE from 'three'
import { v4 as uuid } from 'uuid'

import data from '../json/data.json'

const Buildings = () => {
  const planeGeo = new THREE.PlaneGeometry(50, 50)
  planeGeo.rotateX(-Math.PI / 2)

  const buildingMaterial = new THREE.MeshStandardMaterial({ color: '#c0c0c0' })
  const planeMaterial = new THREE.MeshBasicMaterial({ color: '#232323' })

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
          key={uuid()}
          geometry={genBuilding(building.cords, building.floorCount)}
          material={buildingMaterial}
        />
      ))}
    </group>
  )
}

export default Buildings
