import React from 'react'
import { v4 as uuid } from 'uuid'

import data from '../json/data.json'
import { Tree1, Tree2, Tree3 } from './'

const Trees = () => {
  return (
    <>
      {data.trees.map((tree) => (
        <group key={uuid()}>
          {tree.type === 1 && <Tree1 cord={tree.cord} />}
          {tree.type === 2 && <Tree2 cord={tree.cord} />}
          {tree.type === 3 && <Tree3 cord={tree.cord} />}
        </group>
      ))}
    </>
  )
}

export default Trees
